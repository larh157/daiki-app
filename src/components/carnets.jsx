import '../styles/carnets.css'
import imgdaikiri from "../image/daikiri.png";






export function Carnets({cedula, name, tipo}) {
function font (){
  if(cedula === 'STAFF'){
    return 'tipoC'
  }
  return '';
}

    return (
<div id='carnet'>
<img id='imagen' src={imgdaikiri} />
<div id='texto' className='texto'>
  <h2 id='cedula' className={font()}>{cedula == '' ? <br/>: cedula }</h2>
  <h2 id='name'>{name == '' ? <br/>: name}</h2>
</div>
<div id='vacio' className='texto'></div>
<div id='texto2' className='texto'>
  <h2 id='tipo'  >{tipo}</h2>
        </div>
</div>
    );
}



