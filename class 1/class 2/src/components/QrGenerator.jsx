import React, { useState } from 'react'

export const QrGenerator = () => {

    const [img,setimg] = useState("")
    const [loading,setLoading] = useState(false)
    const [qrData,setQrData] = useState("")
    const [qrSize,setQrSize] = useState("")


   async function generateQr() {
    try{
        const  url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
        setimg(url)

    }catch(error){
        console.error("generate qr code error",error)

    }finally{
        setLoading(false)
    }
   }

    function downloadqr() {
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link = document.createElement ("a");
            link.href = URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

           

        }).catch
        ((error) => {
            console.error("download generating qr code error",error);
        });
    }

  return (
    <div className='app-container'>
        <h1>Qr Code Generator</h1>
        {img && <img src={img} alt=""  className='img-size'/> }
      { loading && <p>please wait.....</p> }
        <div className='input-container'>
            <label htmlFor="dataInput" className='input-label'>Data For Qr Code</label>
            <input type="text" placeholder='Generate Qr Data'className='input-box'  value={qrData} onChange={(e)=> setQrData(e.target.value)} />
            <label htmlFor="dataSize" className='input-label'>Image Size (eg:150) </label>
            <input type="text" placeholder='Enter Your Qr Size' className='input-box' value={qrSize} onChange={(e) => setQrSize(e.target.value)}  />
            <button className='generate-button' disabled={loading} onClick={generateQr} >Generate Qr Code</button>
            <button className='download-button' onClick={downloadqr} >Download Qr Code</button>
           
        </div>

    </div>
  )
}
