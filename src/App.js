/** @jsx jsx */
import React, { useState } from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Payment from "./Payment"

const List = styled.ul`
list-style: none;

> li {
  margin: 0 0 10px;
  color: rgba(0,0,0,0.7);
  position: relative;
}

li::before {
  color: rgba(0,0,0,0.2);
  content: "•";
  display: inline-block;
  font-size: 1em;
  left: -1.1225em;
  position: absolute;
  top: 0em;
}
`

function App() {
  const [term, setTerm] = useState("year")
  const [activePlan, setActivePlan] = useState(null)
  const [success, setSuccess] = useState(null)
  const [state, setState] = useState({ screen: "signup" })

  if (state.screen === "finished" && success) {
    return (
      <div className="pa5 lh-title">
        <h3 css={css`
          max-width: 30rem;
        `}>Thanks for signing up {success.customerName}. We've sent you an email to confirm your account details.</h3>
      </div>
    )
  }

  return (
    <div className="flex flex-column flex-row-ns pa3 pa5-ns">
      <div css={css`
        flex: 1;
        margin-bottom: 30px;
        @media screen and (min-width: 768px) {
          padding-right: 40px;
        }
      `}>
        <h3 className="lh-title f2 fw6">No additional costs.<br />Pay for what you use.</h3>

        <div className="mt4 ba b--blue br2 flex" css={css`
          max-width: 260px;
        `}>
          <span
            className={`flex-auto pointer pa2 tc ${term === "month" ? "bg-blue white" : "blue"}`}
            onClick={() => setTerm("month")}
          >
            Monthly
          </span>
          <span
            className={`flex-auto pointer pa2 tc ${term === "year" ? "bg-blue white" : "blue"}`}
            onClick={() => setTerm("year")}
          >
            Yearly
          </span>
        </div>
      </div>
      <div css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 260px;
        margin-bottom: 30px;
        border: solid 1px #d7d7d7;
        @media screen and (min-width: 768px) {
          margin-right: 40px;
        }
      `}>
        <div className="bg-blue pa3">
          <h1 className="white ma0 fw4 f3">uSW Device</h1>
          <h2 className="white flex items-start mb0">
            <small className="fw4">$</small>
            <span className="f1 fw6">960</span>
            <small className="self-end fw4">/device</small>
          </h2>
        </div>
        <div className="pa3" css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}>
          <List>
            <li>World-wide 2G/3G or LTE M1</li>
            <li>Low power</li>
            <li>Supports RS232 and USB</li>
            <li>Micro SD memory card</li>
            <li>Remote firmware updates over-the-air</li>
          </List>

          <button
            className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
            css={css`
              padding: 14px;
              border: none;
              -webkit-appearance: none;
              outline: none;
            `}
            onClick={() => setActivePlan("https://staging.payhere.co/segroup/usw-device-0604cf5c-f5e4-4a23-9c07-8979538e8da5")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 260px;
        margin-bottom: 30px;
        border: solid 1px #d7d7d7;
        @media screen and (min-width: 768px) {
          margin-right: 40px;
        }
      `}>
        {term === "year" ?
          <React.Fragment>
            <div className="bg-blue pa3">
              <h1 className="white ma0 fw4 f3">Annual plan</h1>
              <h2 className="white flex items-start mb0">
                <small className="fw4">$</small>
                <span className="f1 fw6">660</span>
                <small className="self-end fw4">/year</small>
              </h2>
            </div>
            <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
              <List>
                <li>World-wide cell access</li>
                <li>WoopWoop cloud bank</li>
                <li>Standard data plan</li>
                <li>Reporting tools</li>
                <li>Much more&hellip;</li>
              </List>

              <button
                className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                onClick={() => setActivePlan("https://staging.payhere.co/segroup/annual-plan-6a944cbb-4849-49a6-aa4d-0c32c43d5e22")}
              >
                Get Started
              </button>
            </div>
          </React.Fragment>
        :
          <React.Fragment>
            <div className="bg-blue pa3">
              <h1 className="white ma0 fw4 f3">Monthly plan</h1>
              <h2 className="white flex items-start mb0">
                <small className="fw4">$</small>
                <span className="f1 fw6">72</span>
                <small className="self-end fw4">/month</small>
              </h2>
            </div>
            <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
              <List>
                <li>World-wide cell access</li>
                <li>WoopWoop cloud bank</li>
                <li>Standard data plan</li>
                <li>Reporting tools</li>
                <li>Much more&hellip;</li>
              </List>

              <button
                className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                onClick={() => setActivePlan("https://staging.payhere.co/segroup/monthly-plan")}
              >
                Get Started
              </button>
            </div>
          </React.Fragment>
        }
      </div>

      {activePlan &&
        <Payment
          embedURL={activePlan}
          onSuccess={data => {
            console.log("Payment success", data)
            setSuccess(data)
          }}
          onFailure={err => {
            console.error("Payment failed", err)
          }}
          onClose={() => {
            console.log("onClose fired")
            setState({ ...state, screen: "finished" })
            setActivePlan(null)
          }}
        />
      }
    </div>
  )
}

export default App
