import React, { Component } from 'react';
import './main.css';
import { Link } from "react-router-dom";

class ProductFeatures extends React.Component {
    render() {
        const features = this.props.features.map((item, key) => {
            return <li key={key}>{item}</li>
        });

        return (
            <div className="product--features">
                <ul>
                    {features}
                </ul>
            </div>
        );
    }
}

class Product extends React.Component {
    updateCurrentPlan = () => {
        this.props.changePlan(this.props.productData);
    }

    render() {
        return (
            <div className={"product "+(this.props.productData.id == this.props.currentProductId ? "is-active": null)}>
                <div className="product--main">
                    <header className="product--header">
                        <h2 className="product--header--name">{this.props.productData.name}</h2>
                    </header>
                    <main className="product--body">
                        <ProductFeatures
                            features={this.props.productData.features}
                        />
                    </main>
                </div>
                <footer className="product--footer">
                    <button
                        className="product--choose"
                    >
                        <Link to={`${this.props.productData.linkP}`}>Easy</Link>
                    </button>
                </footer>
            </div>
        );
    }
}

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct:{}
        };
    }

    handlePlanChange = (item) => {
        this.setState({ currentProduct: item });
    }

    render() {
        const products = this.props.productPlans.map((item, key) => {
            return <Product
                productData={item}
                key={item.id}
                changePlan={this.handlePlanChange.bind(this)}
                currentProductId={this.state.currentProduct.id}
            >
                {item.name}
            </Product>
        });

        return (
            <div>
                <div className="products">
                    {products}
                </div>

                {this.state.currentProduct.name ? (
                    <div className="results">
                        <div>
                            Selected category: {this.state.currentProduct.name}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

            </div>
        );
    }
}


export default Products;
