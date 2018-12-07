// axios
//     .get('https://szfd5uljeg.execute-api.us-west-2.amazonaws.com/dev/get')
//     .then((response)=>{
        // var student1 = response.data.message.rows;
        // console.log('student1[0]', student1[0]);
        // document.getElementById('derp').innerHTML = "Name : " + student1[0].name;
        // document.getElementById('derp2').innerHTML = "Id : " + student1[0].id;
        // document.getElementById('derp3').innerHTML = "Grade : " + student1[0].grade;
    //     console.log('response', response.data.message.rows);
    //     const putIn = (response.data.message.rows).map(x=>{
    //         console.log('x', x);
    //         let cardTemplate = `
    //         <div class = 'derp4'>
    //             <p> Id : ${x.id} </p>
    //             <p> Name : ${x.name} </p> 
    //             <p> Grade : ${x.grade} </p>
    //         </div>
    //         `
    //         let ofu = document.createElement('div');
    //         ofu.innerHTML = cardTemplate;
    //         document.querySelector('#derp').appendChild(ofu);
    //     })
    // })
    // .catch((error)=>{
    //     console.log('error', error);
    // })

const name = document.querySelector('#post-name');
const grade = document.querySelector('#post-geade');
const submit = document.querySelector('#post-submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('name.value', name.value);
    console.log('grade.value', grade.value);
    axios
        .post('https://szfd5uljeg.execute-api.us-west-2.amazonaws.com/dev/post', {
            name: name.value;
        })
})

//1-3 9-26
    // const htmlTemplateBuilder = response =>{
    //     console.log('response', response);
    //     result.innerHTML = response.data.message.rows
    //     .map(derp => {
    //         return `
    //         <p>Grade: ${response.data.message.rows[0].grade}</p>;
    //         <p>Name: ${response.data.message.rows[0].name}</p>;
    //         <p>Id: ${response.data.message.rows[0].id}</p>;
    //         `;
    //     })
    //     .join('');
    // };