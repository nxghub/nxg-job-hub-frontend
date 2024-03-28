import React, {useContext, useEffect, useState} from 'react';
import basic from '../../../../static/icons/free-icon.svg';
import silver from '../../../../static/icons/silver-icon.svg';
import gold from '../../../../static/icons/gold-icon.svg';
import platinum from '../../../../static/icons/platinum-icon.svg';
import '../../subscriptions/subscription.scss';
import { BsCheck } from 'react-icons/bs';
import axios from 'axios';
import { API_HOST_URL } from '../../../../utils/api/API_HOST';
import { UserContext } from '../..';

const TechSubCards = ({onSubscribe, countryCode}) => {
    const user = useContext(UserContext);
    const [exchangeRate, setExchangeRate] = useState(null);
    // Function to fetch and convert prices to NGN

    useEffect(() => {
        fetchExchangeRate();
    }, []);

    const fetchExchangeRate = async () => {
        try {
            const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
            const data = await response.json();
            setExchangeRate(data.usd['ngn']); // Assuming NGN is the target currency
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
        }
    };

    const convertToNGN = (price) => {
        if (exchangeRate) {
            const priceInUSD = parseFloat(price.replace('$', ''));
            const priceInNGN = priceInUSD * exchangeRate;
            return priceInNGN.toFixed(2) + ' ₦';
        } else {
            return price;
        }
    };

    const monthlySubscriptions = [
        {
            subId: 1,
            subLogo: basic,
            subTitle: "Free",
            subPrice: "0$",
            subBenefit: [
                "Access to all basic features",
                "Use the website for one month only, completely free"
            ],
            planType : "Free"
        },
        {
            subId: 2,
            subLogo: silver,
            subTitle: "Silver",
            subPrice: "25$/3months",
            subBenefit: [
                "Access to all basic features",
                "Solid foundation for limited job posting and searching.",
                "10 vetted job posting throughout the entire 3 months period."
            ],
            planType : "Silver"
        },
        {
            subId: 3,
            subLogo: gold,
            subTitle: "Gold",
            subPrice: "70$/6months",
            subBenefit: [
                "Access to all basic features",
                "Solid foundation for limited job posting and searching.",
                "Unlimited vetted job listing, posting and tech talent search."
            ],
            planType : "Most Popular"
        },
        {
            subId: 4,
            subLogo: platinum,
            subTitle: "Platinum",
            subPrice: "90$/Yearly",
            subBenefit: [
                "Access to all basic features",
                "Solid foundation for limited job posting and searching.",
                "Unlimited vetted job listing, posting and tech talent search.",
                "Fast job application, tech talent profile matching mechanism and customer support."
            ],
            planType : "Recommended"
        },
    ];

    const handlePayment = async (planType) => {
        try {
            const userData = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phoneNumber,
                planType: planType
            };
            console.log(userData);
      
             const subAcct = await axios.post(`${API_HOST_URL}/api/subscriptions/create-account`, userData);
            console.log(subAcct);
            // if(subAcct.data) {
            //     const subscribeResponse = await axios.post(`${API_HOST_URL}/api/subscriptions/subscribe`, {
            //         email: user.email,
            //         callback_url: `${window.location.origin}/subscription-callback`
            //     });
            //     console.log('User subscribed successfully:', subscribeResponse.data);
            //     // Verify customer after successful subscription
            //     await verifyCustomer(userData);
            // }

          } catch (error) {
            console.error('Error posting user data:', error.message);
          }
        // onSubscribe(true);
    }

    // const verifyCustomer = async (user) => {
    //     try {
    //         const { email, accountNumber, bvn, bankCode, customerCode } = user;
    //         await axios.post(`${API_HOST_URL}/api/subscriptions/verify-customer`, {
    //             email,
    //             account_number: accountNumber,
    //             bvn,
    //             bank_code: bankCode,
    //             customer_code: customerCode
    //         });
    //         console.log('Customer verified successfully.');
    //     } catch (error) {
    //         console.error('Error verifying customer:', error.message);
    //     }
    // };

  return (
    <>
        <div className="sub-tabs">
            <h2 className="sub-tabs-title">Choose Your Subscription Plan!!!</h2>
        </div>
            <div className="sub-text">
                <p>
                    Choose the subscription plan that best suits you, start for free now and upgrade later ..
                </p>
            </div>
            <div className='sub-cards-main'>
                {monthlySubscriptions.map((subscription, index) => (
                    <div className='sub-cards-single' key={subscription.subId}>
                        <div className="sub-cards-title-container">
                            {(index >= monthlySubscriptions.length - 2) && (
                            <p style={{ float: "right", background: "rgba(102, 182, 209, 1)", color: "#fff", width: "160px", border: "none", borderRadius: "21px", padding: "8px", fontSize: "18px", fontWeight: "500", margin: ".4rem" }}>{subscription.subGroup}</p>
                            )}
                            <div className="sub-cards-title">
                                <img src={subscription.subLogo} alt=""  />
                                <h3>{subscription.subTitle}</h3>
                            </div>
                            {/* Convert price to NGN if user is Nigerian */}
                            {/* <p className='sub-price'>{countryCode === "NG" ? `${convertToNGN(subscription.subPrice)}₦` : subscription.subPrice}</p> */}
                            <p className='sub-price'>{countryCode === "NG" ? convertToNGN(subscription.subPrice) : subscription.subPrice}</p>
                        </div>
                        <div className="sub-cards-lists">
                            <ul>
                                {subscription.subBenefit.map((benefit, index) => (
                                    <li key={index}>
                                        <div className="sub-check">
                                            <BsCheck style={{color: "rgba(77, 242, 19, 1)"}} />
                                        </div>
                                        <p>{benefit}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {subscription.subId === 1 ? (
                            null
                        ) : (
                            <div className="sub-cards-btns">
                                <button className={subscription.planType === "Recommended" ? "recommended-btn" : ""} onClick={handlePayment}>Subscribe</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        
    </>
  )
}

export default TechSubCards;