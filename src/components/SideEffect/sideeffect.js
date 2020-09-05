import ScrollReveal from 'scrollreveal'
import M from 'materialize-css/dist/js/materialize'



const sideEffect = () => {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});


    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {})


    const sr = ScrollReveal();
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'bottom'
    });

    sr.reveal('.about-me', {
     duration: 2000,
     origin: 'left',
     delay:1000,
     distance:'300px'
   });
   sr.reveal('.aside', {
     duration: 2500,
     origin: 'right',
     delay:2000,
     distance:'300px'
   });

    sr.reveal('.showcase-left', {
        duration: 3000,
        origin: 'left',
        distance:'300px'
    });

    sr.reveal('.showcase-right', {
        duration: 1000,
      origin: 'right',
      delay: 2000,
        distance:'300px' 
    });
    sr.reveal('.btn', {
        duration: 2000,
        delay:2000,
        origin: 'bottom'
    });
    sr.reveal('#testimonial div', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.poster-left', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2
    });
    sr.reveal('.poster-right', {
        duration: 2000,
        origin:'right',
        distance: '300px',
        viewFactor: 0.2})

        sr.reveal('.work1', {
            duration: 2000,
            delay:1000,
            distance:'300px',
            origin: 'left'
        });
        sr.reveal('.work2', {
            duration: 2000,
            delay:2000,
            distance:'300px',
            origin: 'bottom'
        });
        sr.reveal('.work3', {
            duration: 2000,
            delay:2000,
            distance:'300px',
            origin: 'top'
        });
        sr.reveal('.work4', {
            duration: 2000,
            delay:2000,
            distance:'300px',
            origin: 'left'
        });
        sr.reveal('.work5', {
            duration: 2000,
            delay:1000,
            distance:'300px',
            origin: 'middle'
        });
        sr.reveal('.work6', {
            duration: 1000,
            delay:2000,
            distance:'300px',
            origin: 'right'
        });
        sr.reveal('.work7', {
            duration: 1000,
            delay:2000,
            distance:'300px',
            origin: 'left'
        });
        sr.reveal('.work8', {
            duration: 1000,
            delay:2000,
            distance:'300px',
            origin: 'middle'
        });
        sr.reveal('.work9', {
            duration: 1000,
            delay:2000,
            distance:'300px',
            origin: 'bottom'
        });
   
   
        sr.reveal('.input1', {
            duration: 2000,
            delay:1000,
            distance: '300px',
            viewFactor: 0.2
        });
        sr.reveal('.input2', {
         duration: 2000,
         delay:1000,
         distance: '100px',
         viewFactor: 0.2
       });
   
   

}
export default sideEffect