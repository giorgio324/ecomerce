# Shoppy

![Shoppy Overview](https://lh3.googleusercontent.com/pw/AIL4fc_6wvOKLfJgdVx8MetGgoK_WDDMjkFmY26oEOLP9LWGfRer-_Jt8WqD5CTIE_ypdPmj9LMaaMmmh4gnvDSpTV2XR7vAs-_G9NGGok3WCXdgJzEzdxdNE-W0FH8RnH2WHpxQBU0_I59gSqfUVL8IGq0P3iM88IHzSOuUhHBlYpb1Jp_EYIt_IBFu2XhrvpZfHzpjH4uOqWQ7GvUy4XaZkrjFeZeqybGPYlTC34WP9bidDu8yldLEjmllVgWLwDevqkcHzWlTeh4AT3iDd-aJQV9JqxMttWMZyqkYyl51yPDsMYHHpKA1wT34HGf8DXw6hyhj2EYYxgQodhv-WC0efq5wXViAEk1YUF4lDp7wBVnBYNWpre2lLyXsPVTq0bUvd62iqMul6nHKX1hbHzye5MEfn-yDVBrCR_Hd3mMvXzlb663XWPfMhHOlllLzmHFJpwI2E27DuXsunHybsWrndM6qjeJ3ECObCbeRviG0lewmGcApOvscBC16v2erT6w8Qx70Y0MnhxLT54usSqQ3L6hKdv8j4yEPDCoUrp2gQGscXCgOPwFUEjff7pIp-Kgobc2QdFrLCG3py0pAclBy1H6_qaeKIPo1IMyyo55r47XCViEq3byJ-K30XAsKS0PrWGr_LfhqbVslfqcbE_7W8cVB0PLr60NB4K71eiqCkD63cTNBRsx0l_2t61z4togzKc2NLRyRVKbkIjSaDSg0kv07__Ehp_-74xB4fk9xQLzW9Hki_OEBjykx37e8d0FPCj_MUa2n4ReeXRBCU-4vQ_pGJNOiWXyHxiUCarXFCUOjM0Jeg80B6Wcwm_gI9lnDDNci6s3HpsaTTcmmu3IB8vMI1haKWLzrAn4oPASZv09QITDeEQXG-JTnIenc4PwSvZG2gAOZNRe1DNGeiScUamII_w=w1723-h969-s-no?authuser=0)

## Overview

Shoppy is a simple ecommerce application built with modern web technologies. This project leverages React, Redux Toolkit, Redux Persist, React Toastify, Firebase Authentication, and TailwindCSS to deliver a smooth shopping experience. Users can add products to their cart, adjust item quantities, and remove items as needed. The product information is fetched from the [Fake Store API](https://fakestoreapi.com/) it also supports Google authentification.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)

## Installation

This project requires the latest versions of Node.js and npm. Also ensure you have installed [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). After you clone this repository, you can install the necessary npm packages with this command:

```bash
Clone the repository
$ git clone https://github.com/giorgio324/shoppy.git

Navigate to the project folder
$ cd shoppy

Install npm packages
$ npm install
```

## Usage

After you've installed all the necessary packages, you can start the application via Vite with the following command:

```bash
$ npm run dev
```

## Features

- All users can add items to the cart, increase or decrease the quantity, and remove items from the cart.
- Each product has a unique product page containing detailed information.
- The cart is persisted in the browser's local storage.
- The Project is fully responsive.
- The product data is fetched from the [Fake Store API](https://fakestoreapi.com/) to use the checkout you must be logged in.
- The application supports Google authentication.

## Live Demo

[Shoppy](https://shoppyecomerce.netlify.app/)
