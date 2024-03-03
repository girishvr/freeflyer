

import Swal from 'sweetalert2'
import './App.css'; 

import React, { useState } from 'react';

import {Flyer} from './../utils/Data';


  // customClass: {
  //   container: '...',
  //   popup: '...',
  //   header: '...',
  //   title: '...',
  //   closeButton: '...',
  //   icon: '...',
  //   image: '...',
  //   htmlContainer: '...',
  //   input: '...',
  //   inputLabel: '...',
  //   validationMessage: '...',
  //   actions: '...',
  //   confirmButton: '...',
  //   denyButton: '...',
  //   cancelButton: '...',
  //   loader: '...',
  //   footer: '....',
  //   timerProgressBar: '....',
  // }



  export const alertType = Object.freeze({
    InvalidInput: 'invalid',
    Success: 'success',
    NewFlyer: 'new_flyer',
  });


  export const FreeAlerts = (type) =>{
    console.log("Sweet Alert - type -" + type);
    switch(type){
      case 'invalid':
        inValidInputAlert();
        break;
      case 'success':
        successAlert();
        break;
      case 'new_flyer':
        newFlyerAlert()
        break;
      default:
        
        console.log("Sweet Alert - invalid option");
        break;
    }
  }

  const inValidInputAlert = () => {
    Swal.fire({  
      title: 'Did you enter the number properly?',  
      text: 'Please enter a valid phone number',
      icon: 'warning',
      showConfirmButton: false,
      timer: 2000,

      customClass:{
        title: 'sweet_title',
        // header: 'sweet_title',
        // container: 'sweet_title',
        // validationMessage: 'sweet_title',
        popup: 'sweet_container',
        
      }
    }); 
  }

  const successAlert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your log in completed',
      showConfirmButton: false,
      timer: 1500,
      customClass:{
        title: 'sweet_title',
        header: 'sweet_title',
        popup: 'sweet_container',
      }
    });
  }


 const newFlyerAlert = () => {

  let enterFlyerSwal = {
    title: 'Enter Flyer Infromation',
    focusConfirm: false,
    html: `
      <input class="swal2-input" id="flyer_title" type="text" placeholder="Enter Title Text" autofocus /><br />
      <textarea class="swal2-input swal2-textarea" id="flyer_bulletin" type="text" placeholder="Enter Message"></textarea> 
    `,
    
    showCancelButton: true,
    cancelButtonColor: 'grey',
    confirmButtonText: 'Post it!',
    allowOutsideClick: false,
    customClass:{
        title: 'sweet_title_flyer_alert',
        // header: 'sweet_title',
        // popup: 'sweet_container',
      },
    preConfirm: () => ({
      flyer_title: document.getElementById('flyer_title').value,
      flyer_bulletin: document.getElementById('flyer_bulletin').value,
    })
  };

  const swalval = Swal.fire(enterFlyerSwal).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                console.log(result.value);
                console.log(result.value.flyer_title); 
                console.log(result.value.flyer_bulletin); 
                Swal.fire(JSON.stringify(result.value));
                // Swal.fire('Your flyer is posted!', '', 'success');
               
 
            } else
                Swal.fire('Operation Cancelled', '', 'error');
 
        })
   
  }


/*

 Flyer

                { id:"999", 
                phone: "9876543218", 
                bulletin:result.value.flyer_bulletin, 
                title:result.value.flyer_title}


*/

// export{ inValidInputAlert }
// export{ successAlert }
