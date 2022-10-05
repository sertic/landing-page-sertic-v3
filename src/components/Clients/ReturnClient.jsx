export const ReturnClient = ({ dark, link, img, name }) => {
  console.log(img);
  return (
    <div>
      <a 
        className={`client ${ dark ? 'text-light' : 'text-dark'}`} 
        href={ link } 
        target='blanck'
        style={
          dark
            ?
          {'backgroundColor':'#5A5A5A'}   
            :
          {'backgroundColor':'#DDDDDD'}   
        }
      >
        <img 
          width='200'
          src={ img } 
          alt={ name }
        />
      <h4
        className={`animate__animated animate__fadeInUp client ${ dark ? 'text-light' : 'text-dark'}`}
        style={
          dark
            ?
          {'backgroundColor':'#5A5A5A'}   
            :
          {'backgroundColor':'#DDDDDD'}   
        }
      >
        { name }
      </h4>
      </a>
    </div>
  );
};
