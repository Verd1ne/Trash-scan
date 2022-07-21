import React from 'react'
import Layout from '../components/Layout';
import Logo from "../images/trashscan-icon.png";
import Card from "../images/card-template.png";
import Card2 from "../images/DisplayCard1.png";

function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "",
          flexDirection: "",
          alignItems: "",
          backgroundColor: "black",
        }}
      >
        <title>TrashScan</title>
        <div className=" ">
          <div>
            <header className="bg-yellow-300 rounded-3xl rounded-t-none pt-4">
                <img src={Logo} alt='logo' className="object-contain h-16 w-16 flex ml-72 pb-2" ></img>
            </header>
          </div>
          <div className="h-60">
              <img src={Card} alt='card' className="GreyCard rounded-3xl flex object-contain"></img>
              <div className="BlackBg block bg-black mt-5">
              </div>
          </div>
          <br />
          <div>
              <section className="LowerGradient block bg-gray-500 h-96 pt-9">
                <div> 
                  <img src={Card2} alt='card2' className="displaycard1 rounded-3xl object-center"></img>
                </div>

              </section>
          </div>


        </div>
      </div>
    </Layout>
  );
}

export default Home;
