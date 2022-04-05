import React, {Component} from "react";
import Card from "../components/Card";
import {getDownloadURL, ref}  from "firebase/storage";
import { db, dbs} from '../firebase-config';
import { onValue}  from "firebase/database";
import {ref as refd} from "firebase/database"; 
import { mapSeries } from "bluebird";

function getImageUrl(id, ext){
    return new Promise(async(resolve) => {
      await getDownloadURL(ref(dbs, 'img/' + id + '.' + ext)).then(url => {
        resolve(url);
        
      });
    })
    
  }



class FirebaseData extends Component {

    contructor(props) {

        this.setState = {
          newState: {},
        };  
      }
      
      
    UNSAFE_componentWillMount(){

      onValue(refd(db, '/assets'), (snapshot) => {
        let newState = { assets: [], images: []};
        this.setState(newState);
        const data = snapshot.val();
        
        if (data !== null) {
          let newData = Object.entries(data);
            
          mapSeries(newData, async (asset) => {

              const image = await getImageUrl(asset[0], asset[1].imgext);


              newState.assets.push(asset);
              newState.images.push(image);
              

              return this.setState(newState);
            }).then(() => {
              console.log('carga completa de asset');
            }).catch(function (err){
              console.log("Algo salió mal")
            })
          }

        });
          
      }

      componentWillUnmount(){

      }
   
    render(){

      
      return(
          <>  
            {this.state ? this.state.assets.map((asset, index) => (
                <Card
                  key={asset[1].id}
                  name={asset[1].name}
                  author={asset[1].createdby}
                  img={this.state.images[index]}
              />
              )):null
              } 
          </>
      )
    }
}

export default FirebaseData




