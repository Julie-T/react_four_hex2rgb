import React from 'react'

const ColorConverter = () => {

    const [form, setForm] = React.useState({
        background: '#ffffff'
    })
    const [color, setColor] = React.useState('#000000');
    const [colorRGB, setColorRGB] = React.useState('33')

    const handleColor = (e) => {
      e.preventDefault()
      setColor(e.target.value)
    }

    const hexToRgb = (hex) => {
      console.log(hex)
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      console.log(result)
      result = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : "";
      const rgb = 'rgb(' + result.r + ', ' + result.g + ', ' +  result.b + ')';
      setColorRGB(rgb);
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(color.length === 7 && color[0] === '#' && /^#[0-9A-F]{6}$/i.test(color)) {
      const newBackground = {
          background: color
        }
        setForm(newBackground)
        hexToRgb(color)
      } 
      else {
        setColorRGB('Ошибка!')
        const newBackground = {
          background: 'red'
        }
        setForm(newBackground)
      }
    }

    // const hexToRgbNew = (h) => {
    //   var arrBuff = new ArrayBuffer(4);
    //   var vw = new DataView(arrBuff);
    //   vw.setUint32(0,parseInt(h, 16),false);
    //   var arrByte = new Uint8Array(arrBuff);
    //   return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
    // }


    // const sshexToRGB = (hex) => {
    //   hex = '0x' + hex.slice(1)
    //   let r = (hex >> 16) & 0xFF
    //   let g = (hex >> 8) & 0xFF
    //   let b = hex & 0xFF
    //   return `rgb(${r}, ${g}, ${b})`
    // }

    // console.log(sshexToRGB('#ffff22'));

  return (
    <div className='color' style={{backgroundColor: `${form.background}`}}>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='Введите цвет' type='text' id='color' name='color' value={color} onChange={(e) => handleColor(e)} maxLength='7'/>
        <div className='rgb' style={{backgroundColor: `#FF${form.background.slice(1)}`}}>{colorRGB}</div>
    </form>
    </div>
  )
}

export default ColorConverter
