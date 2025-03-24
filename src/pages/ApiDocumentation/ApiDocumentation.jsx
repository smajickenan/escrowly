import React, {useState} from "react";
import { Helmet } from "react-helmet-async";
import "./ApiDocumentation.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import ErrorCodeTable from "../../components/ErrorCodeTable/ErrorCodeTable";
import Innovate from "../../sections/Innovate/Innovate";
import ApiNavigation from "../../components/ApiNavigation/ApiNavigation";
import Button from "../../components/Button/Button";

const myCode = 
`curl 
"https://api.escrowly.com/v1/transaction/9292" \\
 -X PATCH \\
 -u email-address:api-key \\
 -H 'As-Customer: user@example.com' \\
 -d '{"action": "receive"}'`
;

const codesData = [
    { code: 200, description: 'Request successful' },
    { code: 400, description: 'Bad Request' },
    { code: 401, description: 'Authentication required' },
    { code: 403, description: 'Permission denied' },
    { code: 404, description: 'Resource not found' },
    { code: 422, description: 'Malformed request' },
    { code: 429, description: 'Rate limit exceeded' },
    { code: 500, description: 'Internal sever error' },
];


const ApiDocumentation = () => {

    const [apiNav, setApiNav] = useState(false)

    function apiNavToggle() {
        setApiNav(prev => !prev);
    }
    return (
        <>
            <Helmet>
                <title>Best Crypto Escrow - Escrowly</title>
                <meta name="description" content="Secure your crypto transactions with Escrowly, the trusted escrow service for crypto traders." />
                <meta name="keywords" content="secure crypto escrow, secure transactions, Escrowly, Bitcoin escrow, Ethereum escrow, crypto escrow service, smart contract escrow, blockchain escrow service, crypto escrow for businesses, USDT escrow service, escrow wallet for crypto, secure P2P crypto escrow, escrow for digital items, escrow for domain names, escrow for real estate" />
                <meta name="author" content="Escrowly Crypto Escrow Team" />
                <meta property="og:title" content="Escrowly – Buy & Sell Online Safely with Crypto" />
                <meta property="og:description" content="Buy and sell online with confidence using Escrowly. Our secure crypto escrow service ensures safe transactions for digital goods, services, and high-value assets." />
                <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
                <meta property="og:url" content="https://escrowly.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div>
                <main className="main-content">
                    <Breadcrumbs 
                        breadcrumbs={[
                            { title: "Home", url: "/" },
                            { title: "API Documentation", url: "/api-documentation" },
                        ]}
                    />
                    
                    <section className="section-api-documentation">
                        <div className="container">
                            <div className="row">
                                <ApiNavigation
                                    active={apiNav ? 'active' : ''}
                                    apiNav={apiNav} 
                                    setApiNav={setApiNav}
                                />
                                <div className="col api-documentation-content">
                                    <SectionHeader 
                                        label="API Documentation"
                                        title="Escrowly API Documentation"
                                        className=""
                                    />
                                    <h3>Overview</h3>
                                    <p>Approved partners can execute specific actions on a transaction on behalf of customers. Once approved, you can perform actions such as agree, ship, receive, reject, ship return, receive return, and reject return for another party. Additionally, you can check and select payment methods for that party.</p>
                                    <p>This is achieved by including the As-Customer header with the email address of the party you are acting on behalf of.</p> 
                                    <hr />
                                    <h3>Example Request</h3>
                                    <p>The following example demonstrates how to perform an action using the As-Customer header:</p>
                                    <CodeBlock code={myCode} language="javascript" />
                                    <p>(Examples for Python, Ruby, PHP, and C# available in the full API documentation.)</p>
                                    <hr />
                                    <h3>Rate Limiting</h3>
                                    <p>To maintain platform stability, rate limits are enforced on all Escrowly API endpoints. The number of remaining requests is included in the RateLimit-Remaining HTTP header. If you require higher limits, please contact our support team.</p>
                                    <hr />
                                    <h3>Error Codes</h3>
                                    <p>In case of an error, the API will return an appropriate HTTP status code. Below is a list of common responses:</p>
                                    <ErrorCodeTable codes={codesData}/>
                                    <hr />
                                    <Button
                                        onClick={apiNavToggle}
                                        text="All Steps"
                                        className="btn-primary btn-icon-left btn-open-api-nav"
                                        icon="/img/icon-sort.svg"
                                    />
                                    <div className="next-steps">
                                        <h3>Next Steps</h3>
                                        <ul>
                                            <li><a href="#url">Create a Transaction<img src="/img/btn-arrow-right-blue.svg" alt="" /></a></li>
                                            <li><a href="#url">Create a Customer<img src="/img/btn-arrow-right-blue.svg" alt="" /></a></li>
                                            <li><a href="#url">Full API Reference<img src="/img/btn-arrow-right-blue.svg" alt="" /></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            

                        </div>
                    </section> 
                    <Innovate/>
                </main>
            </div>
        </>
    )
}

export default ApiDocumentation;