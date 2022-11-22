export const ReturnClient = ({ dark, link, img, name }) => {
  return (
    <div>
      <a 
        className={`d-flex align-items-center justify-content-center client ${ dark ? 'text-light' : 'text-dark'}`} 
        href={ link } 
        target='blanck'
        // style={
        //   dark
        //     ?
        //   {'backgroundColor':'#5A5A5A'}   
        //     :
        //   {'backgroundColor':'#DDDDDD'}   
        // }
      >
        <img 
          src={ img } 
          alt={ name }
        />
      </a>
    </div>
  );
};
