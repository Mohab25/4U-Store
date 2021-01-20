import styled from "styled-components/macro";

/* Home */
export const Home = styled.div`
    height:500px; 
    display:block;
    background:url('${props=>props.bg_url}');
    background-size: cover;
    background-position: center;
    background-attachment:fixed; 
    overflow: hidden;
    margin-top:50px; 

    @media(max-width:420px){ 
        display:flex; 
        flex-direction:column; 
    }

`

/* Home container*/
export const HomeContainer = styled.div`
    width:100%; 
    height:100%;
    position:absolute;  
    background-color: rgba(0,0,0,0.8);
    display:flex; 
    flex-direction:column;
    align-items:center;
    position:relative;
    padding-top:20px; 
`
/* Title container */
export const MainTitleContainer = styled.div`
    position: relative;
    margin-top: 100px;
    height: 130px;

    @media(max-width:540px){
        height:180px;
        margin-top:40px;
    }

    @media(max-width:420px){
        height:180px;
        margin-top:40px;
    }

`

/* Main title*/
export const MainTitle = styled.h1`
    color:grey;
    font-family: Rubik, sans-serif;

    @media(max-width:420px){
        width:90%;
        font-size:1.8rem; 
    }
`
/* Main sub_title*/
export const MainSubtitle = styled.h2`
    color:grey; 
    padding:5px 0px;
    position:absolute; 
    bottom:0px; 
    left:50%; 
    transform:translateX(-50%);

    @media(max-width:639px){
        width:75%;
        top:65px;
        padding-top:20px;
        transform:translateX(-45%);
    }
`
/* Home title*/
export const HomeTitle = styled.h1`
    color:#fff;
    font-family: Rubik, sans-serif;

    @media(max-width:420px){
        font-size:1.8rem; 
    }
`
/* Home sub_title*/
export const HomeSubtitle = styled.h2`
    color:orangered;
    padding:5px 0px;
    margin-left:-35px; 

    @media(max-width:420px){
        margin-left:65px;
    }
`
/* Home paragraph*/
export const HomePara = styled.p`
    width:250px; 
    color:#fff;
    margin-top:22px;
`
/* Home button */
export const HomeBtn = styled.button`
    width:150px;
    position:absolute; 
    bottom:5px; 
    margin-right:50%;
    left:50%; 
    transform:translate(-50%);  
    color:white; 
    background-color:#FF4500;
    border:none; 
    padding:20px 0px; 
    font-size: 15px;

    @media(max-width:420px){
        margin-left:-2px; 
    }

`
    


