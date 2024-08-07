<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Freelancer Reputation System dApp</h3>

  <p align="center">
    The Freelancer Reputation System dApp documentation.
  </p>
</div>

## About
<p>
    This dApp is a decentralized application (dApp) designed to manage and display freelancer ratings and reviews using blockchain technology. The system ensures transparency and reliability of the feedback given to freelancers.
</p>

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) 
* [docker](https://docs.docker.com/get-docker/)
* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/kendraekwueme456/zec-reputation-system-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dApp via `cartesi-cli`
   ```sh
   cartesi build 
   ```
   and
   ```sh
   cartesi run 
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here you can access the examples of dApp communication and resources consume.

### Advanced handlers
* #### rateFreelancer
  ```js
    description — rate a freelancer.
    param required — {freelancerId: UUID, rating: number, comment: string}
  ```
  data sample
  ```json
    {
        "action":"rateFreelancer", 
        "data":{
            "freelancerId":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", 
            "rating":5, 
            "comment":"Excellent work!"
        }
    }
  ```
  hex sample
  0x7b22616374696f6e223a2272617465467265656c616e636572227d2c2274617267616e2d7a646170

