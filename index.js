let unko = 'Hello, World!';

const bigUnko = 'He..Hell...Hello World';

const inoki = ['いーち', 'にーい', 'さーん', 'ダー！！'];

const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ');
  }else{
    console.log('ボンバ。。。');
  }
};

const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint'
};

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert("Hello World");
});