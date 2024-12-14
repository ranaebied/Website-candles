function message(){
    window.prompt("Enter Your Name:")
}

function signup(){
    Swal.fire({
        title: "Are you sure that you want to sign in?",
        text: "You won't be worry about your data!",
        icon: "information",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Confirmed!",
            text: "Your file has been submitted.",
            icon: "success"
          });
        }
      });
}

function message1(){
    Swal.fire({
        title: "Welcome In Warm Aura, All Candles Made With love",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
 
 