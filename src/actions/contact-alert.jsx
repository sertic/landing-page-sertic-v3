import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

export const onSubmit = async ( formData, form , setFormData, t, setLoading ) => {
    const { name, email, message, phone } = formData;

    // Si hay campos vacios arroja cartel de error
    if( !name.trim() || !email.trim() || !message.trim() || !phone.trim() )
    {
      Swal.fire({
        title: 'Error!',
        text: t("SendEmail.error"),
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      setLoading( false );
    }
    else{
      emailjs.sendForm('landingpage', 'templateweb', form.current, 'vthU-NiNWU4gM6DSq')
      .then(() => {
          // Si está OK, arroja cartel de éxito y blanquea los campos del formulario
          Swal.fire({
            title: 'Excelente!',
            text: t("SendEmail.success"),
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          setFormData({
            ...formData,
            name:'',
            email:'',
            message:'',
            phone:''
          })
          setLoading( false );

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
};