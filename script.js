

document.querySelector('.vverh').addEventListener('click',()=>{
  k38()
})
document.querySelector('.vniz').addEventListener('click',()=>{
  k40()
})
document.querySelector('.vlevo').addEventListener('click',()=>{
  k37()
})
document.querySelector('.vpravo').addEventListener('click',()=>{
  k39()
})
// =========================

cells = document.querySelectorAll(".cells");
cell = document.querySelectorAll(".cell");
cellss = document.querySelectorAll(".cell");
gamewindow = document.querySelector(".game-window");
cellss[0].style = 'left: 20px'
//   =========================================
function cellColor(){
  record()
cellss.forEach(element => {
  if(element.textContent == '2'){
    element.style.backgroundColor = '	#FFA07A'
  }
  if(element.textContent == '4'){
    element.style.backgroundColor = '	#E9967A'
  }
  if(element.textContent == '8'){
    element.style.backgroundColor = '#FA8072 '
  }
  if(element.textContent == '16'){
    element.style.backgroundColor = '#F08080'
  }
  if(element.textContent == '32'){
    element.style.backgroundColor = '#CD5C5C	'
  }
  if(element.textContent == '64'){
    element.style.backgroundColor = '#DC143C'
  }
  if(element.textContent == '128'){
    element.style.backgroundColor = '#FF0000'
  }
  if(element.textContent == '256'){
    element.style.backgroundColor = '#FF4500'
  }
  if(element.textContent == '512'){
    element.style.backgroundColor = '#FF4500'
  }
  if(+element.textContent > 512){
    element.style.backgroundColor = '#ffd700'
  }

  if(element.textContent == ''){
    element.style.backgroundColor = 'rgb(236, 235, 147)'
  }
});
}
document.body.onkeydown = f1;
function f1(event) {
  if (event.keyCode == 37) {
    k37();
  }
  if (event.keyCode == 38) {
    k38();
  }
  if (event.keyCode == 39) {
    k39();
  }
  if (event.keyCode == 40) {
    k40();
  }
}
let generateMassive = [2, 2, 2, 2, 4, 4, 4, 2, 2,2, 2,]

function randomNum(){
  var rand = Math.floor(Math.random() * generateMassive.length);
  let cellsArr = Array.from(cellss)
  let pustie = cellsArr.filter(elem=>elem.textContent=='')
  var randpustie = Math.floor(Math.random() * pustie.length); 
  pustie[randpustie].textContent = generateMassive[rand]
  pustie[randpustie].style.animation = 'anim 0.2s ease 1';
  setTimeout(()=>{
    cellsArr.forEach(element => {
      element.style.animation = ''
    });
  }, 200)

}
randomNum();
cellColor();







// ===================================================
let max = 0
function maxNum(){
  cellss.forEach(elem=>{
    if(elem.textContent&&+elem.textContent>max){
      max = +elem.textContent
    }
  })
document.querySelector('span').textContent = max
}
if(localStorage.getItem('record')!==null){
  document.querySelector('.record2').querySelector('span').textContent = localStorage.getItem('record')
}

function record(){
  if(+document.querySelector('.record').querySelector('span').textContent>+document.querySelector('.record2').querySelector('span').textContent){
    localStorage.setItem('record', +document.querySelector('.record').querySelector('span').textContent)
    document.querySelector('.record2').querySelector('span').textContent = localStorage.getItem('record')
    document.querySelector('.record2').style.animation = 'anim2 0.5s ease 3'
    setTimeout(()=>{
      document.querySelector('.record2').style.animation = ''

    }, 1500)
}
}
let num = 0
let numm = 0
function k38() {

for(let i = 0; i < cells.length; i++){
  
 for(let k = 0; k < cells[i].querySelectorAll('.cell').length; k++){
   cell = cells[i].querySelectorAll('.cell')
  if(cell[k].textContent){
    for(let w = 0; w < i; w++){
      if(!cells[w].querySelectorAll('.cell')[k].textContent){
        cells[w].querySelectorAll('.cell')[k].textContent = cell[k].textContent
        cell[k].textContent = ''
        num = num +1
      }
      if(cells[w].querySelectorAll('.cell')[k].textContent&&cells[w].querySelectorAll('.cell')[k].textContent == cell[k].textContent&&cells[w].querySelectorAll('.cell')[k]!==cell[k]){
        

        let we = []
        for(let q = 0; q<i+1; q++){
          we.push(cells[q].querySelectorAll('.cell')[k])
        }
        let qw = we.filter(elem=>{
          if(elem.textContent){
            return elem
          }
        })

        if(cells[w].querySelectorAll('.cell')[k]==qw[qw.length-2]&&!cells[w].querySelectorAll('.cell')[k].classList.contains('active')){

          cells[w].querySelectorAll('.cell')[k].innerHTML = +cell[k].textContent * 2
          cells[w].querySelectorAll('.cell')[k].style.animation = 'anim 0.3s ease 1';
          cell[k].innerHTML = '' 
          setTimeout(()=>{
            cells[w].querySelectorAll('.cell')[k].style.animation = ''
          }, 200)     
          num = num +1
          numm = numm + 1
          cells[w].querySelectorAll('.cell')[k].classList.add('active')
          setTimeout(()=>{
            cells[w].querySelectorAll('.cell')[k].classList.remove('active')
          }, 50)
        }
      }
    }
  }

}
}
if(num>0){
  randomNum();
  num = 0
  document.querySelector('.b').click()
  

}
if(numm>0){
  document.querySelector('.a').click()
  numm = 0
  maxNum()

}
cellColor()
}

function k40() {



  for(let i = cells.length-1; i >= 0; i--){
    
    for(let k = 0; k < cells[i].querySelectorAll('.cell').length; k++){
      cell = cells[i].querySelectorAll('.cell')
     if(cell[k].textContent){
       for(let w = 4; w > i; w--){
         if(!cells[w].querySelectorAll('.cell')[k].textContent){
           cells[w].querySelectorAll('.cell')[k].textContent = cell[k].textContent
           cell[k].textContent = ''
           num = num +1


         }
         if(cells[w].querySelectorAll('.cell')[k].textContent&&cells[w].querySelectorAll('.cell')[k].textContent == cell[k].textContent&&cells[w].querySelectorAll('.cell')[k]!==cell[k]){
          
          let we = []
          for(let q = cells.length-1; q>i-1; q--){
            we.push(cells[q].querySelectorAll('.cell')[k])
          }
          let qw = we.filter(elem=>{
            if(elem.textContent){
              return elem
            }
          })
  
          if(cells[w].querySelectorAll('.cell')[k]==qw[qw.length-2]&&!cells[w].querySelectorAll('.cell')[k].classList.contains('active')){
  
           cells[w].querySelectorAll('.cell')[k].innerHTML = +cell[k].textContent * 2
           cells[w].querySelectorAll('.cell')[k].style.animation = 'anim 0.3s ease 1';

           cell[k].innerHTML = ''  
           setTimeout(()=>{
            cells[w].querySelectorAll('.cell')[k].style.animation = ''
          }, 200) 
          num = num +1
          numm = numm + 1 
          cells[w].querySelectorAll('.cell')[k].classList.add('active')
          setTimeout(()=>{
            cells[w].querySelectorAll('.cell')[k].classList.remove('active')
          }, 50)

          }
         }
   
       
       }
      }
    }
  }
  if(num>0){
    randomNum();
    num = 0
    document.querySelector('.b').click()

  }
  if(numm>0){
    document.querySelector('.a').click()
    numm = 0
    maxNum()


  }
  cellColor()

}


function k39() {
  for(let i =0; i<cells.length; i++){
    for(let k = cells[i].querySelectorAll('.cell').length-1; k>=0; k--){
      cell = cells[i].querySelectorAll('.cell')[k]
    if(cell.textContent){
    for(let q = cells[i].querySelectorAll('.cell').length-1; q>=k; q--){
      if(!cells[i].querySelectorAll('.cell')[q].textContent){
        cells[i].querySelectorAll('.cell')[q].textContent = cell.textContent
        cell.textContent = ''
        num = num +1


      }
      if(cells[i].querySelectorAll('.cell')[q].textContent&&cells[i].querySelectorAll('.cell')[q].textContent==cell.textContent&&cells[i].querySelectorAll('.cell')[q]!==cell){

        let we = []
        for(let w = cells[i].querySelectorAll('.cell').length-1; w>=k; w--){
         we.push(cells[i].querySelectorAll('.cell')[w])
        }
        let wq = we.filter(elem=>elem.textContent)
          if(cells[i].querySelectorAll('.cell')[q]==wq[wq.length-2]&&!cells[i].querySelectorAll('.cell')[q].classList.contains('.active')
          ){
               cells[i].querySelectorAll('.cell')[q].textContent = +cell.textContent * 2
        cells[i].querySelectorAll('.cell')[q].style.animation = 'anim 0.3s ease 1';
        
        setTimeout(()=>{
          cells[i].querySelectorAll('.cell')[q].style.animation = ''
        }, 200)
        cell.textContent = ''
        num = num +1
        numm = numm + 1
        cells[i].querySelectorAll('.cell')[q].classList.add('.active')
        setTimeout(()=>{
          cells[i].querySelectorAll('.cell')[q].classList.remove('.active')

        }, 50)


          }
      }
    }
    
    }
    
    }
    
    }
    if(num>0){
      randomNum();
      document.querySelector('.b').click()
    num = 0
    }
    if(numm>0){
      document.querySelector('.a').click()
      numm = 0
      maxNum()


    }
    cellColor()
}

function k37() {
  for(let i =0; i<cells.length; i++){
    for(let k = 0; k< cells[i].querySelectorAll('.cell').length; k++){
      cell = cells[i].querySelectorAll('.cell')[k]
    if(cell.textContent){
    for(let q = 0; q<k; q++){
      if(!cells[i].querySelectorAll('.cell')[q].textContent){
        cells[i].querySelectorAll('.cell')[q].textContent = cell.textContent
        cell.textContent = ''
        num = num +1

      }
      if(cells[i].querySelectorAll('.cell')[q].textContent&&cells[i].querySelectorAll('.cell')[q].textContent==cell.textContent&&cells[i].querySelectorAll('.cell')[q]!==cell){
        let we = []
        for(let w = 0; w< k; w++){
         we.push(cells[i].querySelectorAll('.cell')[w])
        }
        let wq = we.filter(elem=>elem.textContent)
          if(cells[i].querySelectorAll('.cell')[q]==wq[wq.length-1]&&!cells[i].querySelectorAll('.cell')[q].classList.contains('.active')
          ){

               cells[i].querySelectorAll('.cell')[q].textContent = +cell.textContent * 2
        cells[i].querySelectorAll('.cell')[q].style.animation = 'anim 0.3s ease 1';
        setTimeout(()=>{
          cells[i].querySelectorAll('.cell')[q].style.animation = ''
        }, 200)
        cell.textContent = ''
        num = num +1
        numm = numm + 1

        cells[i].querySelectorAll('.cell')[q].classList.add('.active')
        setTimeout(()=>{
          cells[i].querySelectorAll('.cell')[q].classList.remove('.active')

        }, 50)


          }
      }
    }
    
    }
    
    }
    
    }
    if(num>0){
      randomNum();
      document.querySelector('.b').click()
      num = 0
    }
    if(numm>0){
      document.querySelector('.a').click()
      numm = 0
      maxNum()


    }
    cellColor()

}
maxNum()
document.querySelector('.restart').onclick = ()=>{
  cellss.forEach(elem=>{
    elem.textContent = ''
  })
  randomNum();
  cellColor();
  document.querySelector('.c').click()
  max = 0
  maxNum()

}


