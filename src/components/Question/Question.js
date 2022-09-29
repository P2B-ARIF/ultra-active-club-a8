import React from 'react';
import './Question.css'


const Question = () => {
    return (
       <section>
         <div className='head-ans'>
            <h2>#Three Answer Of Question</h2>
            <div className="ans">
                <h4>1. How Does React Work.?</h4>
                <p>ক্লায়েন্ট-সাইড অ্যাপস তৈরি করার সময়, Facebook ডেভেলপারদের একটি দল বুঝতে পেরেছিল যে DOM ধীর, এটিকে দ্রুততর করতে, প্রতিক্রিয়া একটি ভার্চুয়াল DOM প্রয়োগ করে যা মূলত জাভাস্ক্রিপ্টে একটি DOM ট্রি উপস্থাপনা। তাই যখন এটি DOM-এ পড়তে বা লিখতে হবে, তখন এটি এর ভার্চুয়াল উপস্থাপনা ব্যবহার করবে। তারপর ভার্চুয়াল DOM ব্রাউজারের DOM আপডেট করার সবচেয়ে কার্যকর উপায় খুঁজে বের করার চেষ্টা করে।
                </p>
                <br />
                <h4>2. What Difference of Props and State..?</h4>
                <p>Props এক উপাদান থেকে অন্য উপাদানে ডেটা প্রেরণ করতে ব্যবহৃত হয়। State হল একটি স্থানীয় ডেটা সঞ্চয়স্থান যা শুধুমাত্র উপাদানগুলির জন্য স্থান তৈরি করে।</p>
                <br />
                <h4>3. useEffect ডাটা লোড করা ছাড়া কি কি কাজে ব্যবহার হয়?</h4>
                <p>The useEffect Hook allows you to perform side effects in your components. Without loading data useEffect hook allow fetching data, directly updating the DOM and times. useEffect runs on every render. Thant means when the count changes, a render happens, which then triggers another effect. useEffect hook accepts two arguments. The second argument is optional</p>
            </div>
        </div>
        <div className="footer">
            <p>Copyright © 2022 GREEN CHILL</p>
        </div>
       </section>
    );
};

export default Question;