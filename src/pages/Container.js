import React from 'react'
import ChatUi from './Chat';
import Gallery from './Gallery';
import Posts from './Posts';
import Profile from './Profile';
import Todo from './Todo';

const Container = ({path}) => {
   return (
   <>
   <ChatUi />
     {(() => {
       switch (path) {
         case "/profile/:id":
           return <Profile />;
         case "/posts":
           return <Posts />;
         case "/gallery":
           return <Gallery />;
         case "/todo":
           return <Todo />;
         default:
           return null;
       }
     })()}
   </>
 )
}

export default Container