import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                ShopSee
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Why to Choose Us</Heading>
                        <FooterLink href="#">
                        Unrivaled Quality
                        </FooterLink>
                        <FooterLink href="#">
                        Exceptional Service
                        </FooterLink>
                        <FooterLink href="#">
                        Secure Shopping
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                        Extensive Product Catalog

                        </FooterLink>
                        <FooterLink href="#">
                        Secure and Convenient Shopping
                        </FooterLink>
                        <FooterLink href="#">
                        Personalized Recommendations
                        </FooterLink>
                        <FooterLink href="#">
                        Efficient Order Fulfillment
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                        Email: [support@example.com]
                        Phone: [+1 (123) 456-7890]
 
                        </FooterLink>
                        <FooterLink href="#">
                        Office Hours
                        Monday to Friday: 9:00 AM to 6:00 PM (Your Time Zone)
Saturday: 10:00 AM to 3:00 PM (Your Time Zone)
Sunday: Closed

                        </FooterLink>
                        <FooterLink href="#">
                        123 Main Street
Suite 456
Cityville, State 78901
United States
                        </FooterLink>
                        <FooterLink href="#">
                        Feedback and Suggestions:[feedback@example.com]
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;