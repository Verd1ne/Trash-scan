import React from 'react';
import Card from "../components/Card"
import { Element } from "react-scroll";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function BalanceSection() {
    return (
      <Element name="balance" 
            className="section lg:mx-10"
            data-aos="fade-in"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
        <div className="container">
            <Splide className="hidden lg:block" options={ {
              type: 'loop',
              perPage : 1,
              focus : "center",
              autoHeight : true,
            } }>
              <SplideSlide>
                <Card            
                    name={
                        <h2 class="is-size-3 has-text-weight-bold">
                        Chloe 
                        <br />
                        Stephanie
                        <br />
                        Balance :
                        <br />
                        Rp.100.000.000
                    </h2>
            }
            />
              </SplideSlide>
            </Splide> 
        </div>
      </Element>
    );
  }