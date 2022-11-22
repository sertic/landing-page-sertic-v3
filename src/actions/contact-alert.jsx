import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

export const onSubmit = async ( formData, form , setFormData, t, setStatus, initialState ) => {

    Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
      })
      .fire({
          icon:   'info',
          title:  t("SendEmail.waiting")
      })

    // Si hay campos vacios arroja cartel de error
    if( Object.values(formData).map(i => i.trim() ).some( element => !element ) )
    {
      setStatus( 'error' );
      return Swal.fire({
        title: 'Error!',
        text: t("SendEmail.error"),
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
      emailjs.sendForm('landing_sertic', 'template_e0468m8', form.current, 'JnK5L6atwPEYMVvlh')
      .then(() => {
          // Si está OK, arroja cartel de éxito y blanquea los campos del formulario
          Swal.fire({
            title: 'Excelente!',
            text: t("SendEmail.success"),
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          setFormData( initialState )
          setStatus( 'OK' );

      }, ({ text }) => {
        // En caso de error arroja cartel con mensaje de error traido de la petición
        Swal.fire({
          title: 'Error!',
          text,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    };