import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import history from './history';
import Background from '../Resources/abstract-background-black-and-white-935871.jpg'
import Pizza from '../Resources/pizza.jpg'
import Sushi from '../Resources/sushi.jpg'
import Wrap from '../Resources/wrap.jpg'

class Main extends Component {
    render() {
        return (
            <div style={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${Background})`,
            }}>

                {/*<div className="carousel slide" data-ride="carousel">*/}
                    {/*<ul className="carousel-indicators">*/}
                        {/*<li data-target="#demo" data-slide-to="0" className="active"></li>*/}
                        {/*<li data-target="#demo" data-slide-to="1"></li>*/}
                        {/*<li data-target="#demo" data-slide-to="2"></li>*/}
                    {/*</ul>*/}

                    {/*/!*carousel slide show*!/*/}
                    {/*<div class="carousel-inner">*/}
                        {/*<div class="carousel-item active">*/}
                            {/*<img className="d-block img-fluid" src={Wrap} alt="Wrap Image missing"></img>*/}
                        {/*</div>*/}
                        {/*<div class="carousel-item">*/}
                            {/*<img className="d-block img-fluid" src={Pizza} alt="Pizza Image missing"></img>*/}
                        {/*</div>*/}
                        {/*<div class="carousel-item">*/}
                            {/*<img className="d-block img-fluid" src={Sushi} alt="Sushi Image missing"></img>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {/*/!*Left and right controls*!/*/}
                    {/*<a class="carousel-control-prev" href="#demo" data-slide="prev">*/}
                        {/*<span class="carousel-control-prev-icon"></span>*/}
                    {/*</a>*/}
                    {/*<a class="carousel-control-next" href="#demo" data-slide="next">*/}
                        {/*<span class="carousel-control-next-icon"></span>*/}
                    {/*</a>*/}

                {/*</div>*/}
            </div>
        )
    }
}

export default Main;