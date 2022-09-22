console.log("test");

const wrappertop = document.querySelector(".wrappertop");
let clickcount=0;

const form1=document.querySelector('form');
    form1.addEventListener("submit", function (e){
        e.preventDefault();
        let imgLink=document.querySelector('#imageLink');
        let imgLink2=imgLink.value;
        let topWords=document.querySelector('#wordTop');
        let topWords2=topWords.value;
        let bottomWords=document.querySelector('#wordBottom');
        let bottomWords2=bottomWords.value;
        console.log(imgLink.value);
        let newDiv=document.createElement("div");

        const newMemeGroup=document.getElementsByClassName('wrappermeme');

        newMemeGroup[0].append(newDiv);
        newDiv.classList.add('testmeme');

        const testmemeClass=document.getElementsByClassName('testmeme');
        let img=document.createElement("img");
        img.setAttribute("src", imgLink2);
        let deleting=document.querySelectorAll(".testmeme")
        console.log(deleting.length);
        clickcount=deleting.length-1
        testmemeClass[clickcount].append(img);
        // deleting.addEventListener("click", function(event){
            // event.target.remove();
        // })

        // let newDiv2=document.createElement("div");
        // newDiv2.classList.add('topwhite');
        // testmemeClass[clickcount].append(newDiv2);
        // newDiv2.innerText=topWords2;

        let newDiv3=document.createElement("div");
        newDiv3.classList.add('topblack');
        testmemeClass[clickcount].append(newDiv3);
        newDiv3.innerText=topWords2;

        // let newDiv4=document.createElement("div");
        // newDiv4.classList.add('bottomwhite');
        // testmemeClass[clickcount].append(newDiv4);
        // newDiv4.innerText=bottomWords2;

        let newDiv5=document.createElement("div");
        newDiv5.classList.add('bottomblack');
        testmemeClass[clickcount].append(newDiv5);
        newDiv5.innerText=bottomWords2;

        let newDiv6=document.createElement('div');
        newDiv6.classList.add('delete');
        testmemeClass[clickcount].append(newDiv6);
        newDiv6.innerText="X";

        // let testMemeInnerDiv1=
        // testMemeInnerDiv1.classList.add('top white');
        // testMemeInnerDiv1.setAttribute.value="testing1";

        
        
        clickcount+=1
      
    
      
        form1.reset();
        // const deleteMeme=document.querySelectorAll('.testmeme')
        // deleteMeme.addEventListener("click", function (event){
            // event.target.parentElement.remove();
        // })
        document.addEventListener('click', function(event){
                // if(event.target.matches('.delete')){
                    // event.target.parentElement.remove();
            if(event.target.matches('.delete')){
                event.target.parentElement.remove();
                console.log("deleted")
                console.log(clickcount)
            }        
        })

    })

    