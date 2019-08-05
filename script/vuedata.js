let app=new Vue({
   el:'#app',
   data:{
       listname:["手感麵包","手作西點","活動餐盒","經典禮盒","喜餅彌月","全球門市"],
       breads:[
        {name:'巧克力藍莓乳酪',price:'40',src:'img/巧克力藍莓乳酪.jpg'},
        {name:'法式三明治',price:'35',src:'img/法式三明治.jpg'},
        {name:'法式水果',price:'45',src:'img/法式水果.jpg'},
        {name:'紅藜麥核桃鹹乳酪丁',price:'60',src:'img/紅藜麥核桃鹹乳酪丁.jpg'},
        {name:'核桃蔓越莓乳酪',price:'45',src:'img/核桃蔓越莓乳酪.jpg'},
        {name:'藍莓貝果',price:'30',src:'img/藍莓貝果.jpg'},
        {name:'雙層漢堡',price:'40',src:'img/雙層漢堡.jpg'},
        {name:'義式薄餅',price:'28',src:'img/義式薄餅.jpg'},
        {name:'熔岩巧克力',price:'45',src:'img/熔岩巧克力.jpg'},
        {name:'海苔起士肉狗',price:'33',src:'img/海苔起士肉狗.jpg'},
        {name:'丹麥布丁',price:'32',src:'img/丹麥布丁.jpg'},
        {name:'肉鬆麵包',price:'20',src:'img/肉鬆麵包.jpg'},
        {name:'鮪魚麵包',price:'23',src:'img/鮪魚麵包.jpg'},
        {name:'金薩哈林',price:'28',src:'img/金薩哈林.jpg'},
    
    
    
      ],
      breadslength:0,
      pageindex:1,
      pagenum:9,
   },
   computed:{
       getpage:function(){
           return Math.ceil(this.breads.length/9);
       },
   },
   methods:{
      setpage:function(e,a)
      {
        let el=event.target;
          this.pageindex=e;
          this.pageinit();
          el.classList.add("pagecolor");
      },
      pageinit()
      {
        let lilist=document.querySelectorAll(".listitem li");
        for(let i=0;i<lilist.length;i++)
        {
            lilist[i].classList.remove("pagecolor");
        }
      }
   },
   mounted()
   {
        let header_menu=document.querySelector(".header_menu");
        let menubt=document.querySelector(".menubt");
        let btclick=false;
        let swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
          });
          document.querySelector(".listitem li").classList.add("pagecolor");
          menubt.addEventListener("click",function(){
            btclick=!btclick;
              if(btclick)
              {
                header_menu.style.left=0;
              }
              else
              {
                header_menu.style.left="100%";
              }
          });
        window.onresize=function(e)
        {
            let w=document.body.offsetWidth;
            if(w>1000)
            {
                btclick=false;
                header_menu.style.left="100%";
            }
        }
   }
}
);