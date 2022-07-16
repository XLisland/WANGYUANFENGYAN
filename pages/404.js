import React from "react";

export default function Custom404() {
    return (
        <div>
            <div className="text-center text-align: center  font-bold text-5xl">
                Sorry, We can not find the page you need.
                <br />
                <br />
                <br />
                404 page
                <br />
                <br />
                <br />
                <a href="http://localhost:3000/" className="hover:bg-gray-700 hover:text-white">
                    Click here to back to Home
                </a>
            </div>
        </div>
    );
}
