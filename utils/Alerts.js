

import Swal from 'sweetalert2'
import './App.css'; 






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


// export{ inValidInputAlert }
// export{ successAlert }
