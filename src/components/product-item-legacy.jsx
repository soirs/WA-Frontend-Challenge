import React, { Component } from 'react';

//
//
// Used initially when I structured the project
// and before Redux was introduced
//
//

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductCatalogue: {},
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const url =
      'https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products';
    const response = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ProductCatalogue: data.body });
      })
      .catch((error) => console.error(error));
    return response;
  }

  render() {
    const { ProductCatalogue } = this.state;
    // const ProductCatalogue = () =>
    //   JSON.parse(JSON.stringify(this.fetchProducts()));
    console.log('ProductCatalogue', ProductCatalogue);

    if (ProductCatalogue.length < 1) {
      return <div>Waiting</div>;
    }
    return (
      <div className='product-list'>
        {Array.from(ProductCatalogue).map((item) => {
          const { npkId, productId, url, name, image, brand, price } = item;
          return (
            <div key={npkId} id={productId} className='product-item'>
              <a
                href={`https://${url}`}
                title={`Go to ${name} product page`}
                className='product-item__link'
              >
                <img src={image} alt='' className='product-item__image' />
              </a>
              <p className='product-item__brand'>{brand}</p>
              <p className='product-item__name'>{`${name}`}</p>
              <p className='product-item__price'>
                {price}
                ,-
              </p>
              <div className='product-item__quantity'>
                <button
                  type='button'
                  name='button'
                  className='product-item__quantity-decrease'
                >
                  -
                </button>
                <input
                  value='0'
                  type='text'
                  className='product-item__quantity-value'
                />
                <button
                  type='button'
                  name='button'
                  className='product-item__quantity-increase'
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductItem;
