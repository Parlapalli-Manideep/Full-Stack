// // function getData(){
// //     // new Promise((resolve,reject)=>{
// //                     fetch("https://fakestoreapi.com/products").then(y=>y.json()).then(res=>console.log(res)).
// //                    catch(err=>console.log(err))
// //                 //    console.log(api)
// //            }
        
// // console.log("manideep")
// function getData() {
//     fetch("https://currencyapi-net.p.rapidapi.com/convert?output=https://coinranking-api1.p.rapidapi.com/currency-converter")
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// }
// getData()

async function getData() {
    const url = 'https://coinranking-api1.p.rapidapi.com/currency-converter';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9d241cbaabmsh9ebd7baa214c8f9p1a5232jsn3971c9e80785',
            'x-rapidapi-host': 'coinranking-api1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getData()