# Wealthsimple Trade API

### Login

#### Request

```
POST https://trade-service.wealthsimple.com/auth/login
{
    "email": "fred@gmail.com",
    "password": "WILMA!!!!"
}
```

#### Response

Check the headers for the access token. It needs to be set as the `Authorization`
header for all other requests.

```
{
    X-Access-Token  000000000000
    X-Refresh-Token 000000000000
}
```

User data is sent back in the body:

```
{
    "object": "user",
    "created_at": "2019-01-01T01:01:01.671Z",
    "updated_at": "2019-01-01T01:01:01.671Z",
    "canonical_id": "user-xxxxxx",
    "external_ws_user_id": "user-xxxxx",
    "external_hw_user_id": "user-xxxxx",
    "external_hw_person_id": "person-xxxxx",
    "attempted_existing_bank_account_import": true,
    "attempted_existing_document_import": true,
    "email_subscription_token": "xxxxxxxxxxxxxxx",
    "email": "fred@gmail.com",
    "first_name": "Fred",
    "last_name": "Flintstone",
    "feature_flags": [
        "tfsa"
    ],
    "id": "user-xxxxx",
    "external_hw_esignature_id": "document-xxxxx",
    "account_signatures": [
        {
            "external_account_id": "non-registered-xxxxx",
            "custodian_account_number": "H000000001CAD",
            "external_esignature_id": "document-xxxxxx",
            "opened_at": "2019-01-01",
            "deleted_at": null
        }
    ]
}
```

### OTP Login

#### Request

```
POST https://trade-service.wealthsimple.com/auth/login
{
    "email": "fred@gmail.com",
    "password": "WILMA!!!!",
    "otp": "123456"
}
```

#### Response

Check the headers for the access token. It needs to be set as the `Authorization`
header for all other requests.

```
{
    X-Access-Token  000000000000
    X-Refresh-Token 000000000000
}
```

User data is sent back in the body:

```
{
    "object": "user",
    "created_at": "2019-01-01T01:01:01.671Z",
    "updated_at": "2019-01-01T01:01:01.671Z",
    "canonical_id": "user-xxxxxx",
    "external_ws_user_id": "user-xxxxx",
    "external_hw_user_id": "user-xxxxx",
    "external_hw_person_id": "person-xxxxx",
    "attempted_existing_bank_account_import": true,
    "attempted_existing_document_import": true,
    "email_subscription_token": "xxxxxxxxxxxxxxx",
    "email": "fred@gmail.com",
    "first_name": "Fred",
    "last_name": "Flintstone",
    "feature_flags": [
        "tfsa"
    ],
    "id": "user-xxxxx",
    "external_hw_esignature_id": "document-xxxxx",
    "account_signatures": [
        {
            "external_account_id": "non-registered-xxxxx",
            "custodian_account_number": "H000000001CAD",
            "external_esignature_id": "document-xxxxxx",
            "opened_at": "2019-01-01",
            "deleted_at": null
        }
    ]
}
```

### Refresh Token

#### Request

```
POST https://trade-service.wealthsimple.com/auth/refresh
{
    "refresh_token": <X-Refresh-Token from initial login request>
}
```

#### Response

```
    OK
```

### Account

#### Request

```
GET https://trade-service.wealthsimple.com/account/list
```

#### Response

```
{
    "object": "account",
    "id": "non-registered-xxxxx",
    "created_at": "2019-01-01T01:01:01.671Z",
    "updated_at": "2019-01-01T01:01:01.671Z",
    "opened_at": "2019-01-01T01:01:01.671Z",
    "deleted_at": null,
    "buying_power": {
        "amount": 100,
        "currency": "CAD"
    },
    "current_balance": {
        "amount": 100,
        "currency": "CAD"
    },
    "net_deposits": {
        "amount": 100,
        "currency": "CAD"
    },
    "available_to_withdraw": {
        "amount": 100,
        "currency": "CAD"
    },
    "available_to_withdraw_day_limit": {
        "amount": 100,
        "currency": "CAD"
    },
    "base_currency": "CAD",
    "custodian_account_number": "H000000001CAD",
    "status": "open",
    "last_synced_at": "2019-01-01T01:01:01.671Z",
    "use_demo_data": null,
    "read_only": null,
    "external_esignature_id": "document-xxxxx",
    "account_type": "ca_non_registered",
    "position_quantities": {}
}
```

### Historical Account Data

#### Request

```
GET https://trade-service.wealthsimple.com/account/history/<TIME>?account_id=<ACCOUNT>
Where TIME is one of [1d, 1w, 1m, 3m, 1y, all]
Where ACCOUNT is the account id received from /account/list Ex. rrsp-123_abc
```

#### Response

```
{
    "results": [
        {
            "value": {
                "amount": 1000,
                "currency": "CAD"
            },
            "net_deposits": {
                "amount": 1000,
                "currency": "CAD"
            },
            "equity_value": {
                "amount": 0,
                "currency": "CAD"
            },
            "withdrawn_earnings": {
                "amount": 0,
                "currency": "CAD"
            },
            "date": "2020-01-28",
            "relative_equity_earnings": {
                "currency": "CAD",
                "amount": 0,
                "percentage": 0
            },
            "lastCloseDataPointEquityValue": {
                "amount": 0,
                "currency": "CAD"
            },
            "dataPointEquityValue": {
                "amount": 0,
                "currency": "CAD"
            }
        },
        ...
    ],
    "live_relative_equity_earnings_baseline": {
        "amount": 1234.56,
        "currency": "CAD"
    },
    "live_earnings_baseline": {
        "amount": 0,
        "currency": "CAD"
    },
    "start_earnings": {
        "amount": 0,
        "currency": "CAD"
    }
}
```

### Get Orders

This is current and past orders.

#### Request

```
GET https://trade-service.wealthsimple.com/orders
```

#### Response

```
{
    "results": [
        {
            "object": "order",
            "created_at": "2019-01-01T01:01:01.671Z",
            "updated_at": "2019-01-01T01:01:01.671Z",
            "filled_at": "2019-01-01T01:01:01.671Z",
            "perceived_filled_at": null,
            "completed_at": "2019-01-01T01:01:01.671Z",
            "order_type": "sell_quantity",
            "order_sub_type": "market",
            "status": "posted",
            "quantity": 100,
            "fill_quantity": 100,
            "symbol": "AAPL",
            "security_name": "Apple Inc",
            "time_in_force": "day",
            "limit_price": null,
            "account_value": {
                "amount": 100.00,
                "currency": "CAD"
            },
            "market_value": {
                "amount": 100.00,
                "currency": "CAD"
            },
            "account_hold_value": null,
            "fill_fx_rate": null,
            "settled": true,
            "order_id": "order-xxxxx",
            "security_id": "sec-s-76a7155242e8477880cbb43269235cb6"
        }
    ]
}
```

### Place Order

#### Request

```
POST https://trade-service.wealthsimple.com/orders
{
    {
        "security_id": "sec-s-76a7155242e8477880cbb43269235cb6",
        "limit_price": 5.00,
        "quantity": 100,
        "order_type": "buy_quantity",
        "order_sub_type": "limit",
        "time_in_force": "day"
    }
}
```

#### Response

```
{
    "object": "order",
    "created_at": "2019-01-01T01:01:01.671Z",
    "updated_at": "2019-01-01T01:01:01.671Z",
    "order_type": "buy_quantity",
    "status": "new",
    "quantity": 100,
    "limit_price": {
        "amount": 5.00,
        "currency": "CAD"
    },
    "filled_at": null,
    "account_value": null,
    "market_value": null,
    "symbol": "HOD",
    "account_hold_value": {
        "amount": 500.00,
        "currency": "CAD"
    },
    "security_name": "Apple Inc",
    "order_sub_type": "limit",
    "time_in_force": "day",
    "fill_fx_rate": null,
    "fill_quantity": null,
    "settled": false,
    "order_id": "order-xxxxxx",
    "security_id": "sec-s-76a7155242e8477880cbb43269235cb6"
}

```

### Cancel/Delete Order

#### Request

```
DELETE https://trade-service.wealthsimple.com/orders/order-xxxxxx
```

### Find Securities

#### Request

```
GET https://trade-service.wealthsimple.com/securities?query=AAPL
```

#### Response

```
{
    "object": "security",
    "offset": 0,
    "total_count": 1,
    "results": [
        {
            "currency": "USD",
            "security_type": "equity",
            "ws_trade_eligible": true,
            "cds_eligible": true,
            "active_date": "1980-12-12",
            "inactive_date": null,
            "active": true,
            "buyable": true,
            "sellable": true,
            "groups": [
                {
                    "id": "security-group-219397c25933",
                    "name_en": "Mobile"
                },
                {
                    "id": "security-group-3dd224bd2e62",
                    "name_en": "Manufacturing"
                },
                {
                    "id": "security-group-56c3bcb832e2",
                    "name_en": "Electronics"
                },
                {
                    "id": "security-group-bf8b024fd382",
                    "name_en": "Retail"
                },
                {
                    "id": "security-group-bfcac6510177",
                    "name_en": "Entertainment and Media"
                },
                {
                    "id": "security-group-c02ac2385470",
                    "name_en": "Software"
                },
                {
                    "id": "security-group-c87a753c998c",
                    "name_en": "Consumer Products"
                },
                {
                    "id": "security-group-cb7e98a45f68",
                    "name_en": "Internet"
                },
                {
                    "id": "security-group-f68970b1232b",
                    "name_en": "Technology"
                }
            ],
            "stock": {
                "country_of_issue": "US",
                "cusip": "037833100",
                "isin": "US0378331005",
                "sedol": null,
                "symbol": "AAPL",
                "name": "Apple Inc",
                "description": null,
                "primary_exchange": "NASDAQ",
                "secondary_exchanges": [],
                "figi": "BBG000B9XRY4"
            },
            "object": "security",
            "id": "sec-s-76a7155242e8477880cbb43269235cb6"
        }
    ]
}
```

### Get Security with Security ID

#### Request

```
GET https://trade-service.wealthsimple.com/securities/sec-s-76a7155242e8477880cbb43269235cb6
```

#### Response

```
{
   "currency":"USD",
   "security_type":"equity",
   "ws_trade_eligible":True,
   "cds_eligible":True,
   "active_date":"1980-12-12",
   "inactive_date":"None",
   "active":True,
   "buyable":True,
   "sellable":True,
   "groups":[
        {
            "id": "security-group-219397c25933",
            "name_en": "Mobile"
        },
        {
            "id": "security-group-3dd224bd2e62",
            "name_en": "Manufacturing"
        },
        {
            "id": "security-group-56c3bcb832e2",
            "name_en": "Electronics"
        },
        {
            "id": "security-group-bf8b024fd382",
            "name_en": "Retail"
        },
        {
            "id": "security-group-bfcac6510177",
            "name_en": "Entertainment and Media"
        },
        {
            "id": "security-group-c02ac2385470",
            "name_en": "Software"
        },
        {
            "id": "security-group-c87a753c998c",
            "name_en": "Consumer Products"
        },
        {
            "id": "security-group-cb7e98a45f68",
            "name_en": "Internet"
        },
        {
            "id": "security-group-f68970b1232b",
            "name_en": "Technology"
        }
   ],
   "status":"None",
   "stock":{
      "allowed_account_types":[
         "ca_individual_pension_plan",
         "ca_investment_club",
         "ca_individual",
         "ca_group_rsp",
         "ca_lira",
         "ca_family_resp",
         "ca_formal_trust",
         "ca_tfsa",
         "ca_spousal_rsp",
         "ca_individual_rif",
         "ca_spousal_rif",
         "ca_lrif_lif",
         "ca_corporate",
         "ca_payable_receivable",
         "ca_individual_rsp",
         "ca_joint",
         "ca_individual_resp"
      ],
      "asset_category":"SHARES",
      "avg_daily_volume_last_month":"34323349.5000",
      "country_of_issue":"US",
      "description":"None",
      "name":"Apple Inc",
      "primary_exchange":"NASDAQ",
      "primary_exchange_country":"US",
      "reuters_attributes":"None",
      "secondary_exchanges":[

      ],
      "security_type":"EQUITY",
      "symbol":"AAPL"
   },
   "asset_class":"us_stocks",
   "ca_mutual_fund":"None",
   "created_by":"sysadmin",
   "default_quote_data_source":"xignite",
   "euro_mutual_fund":"None",
   "fx_rate":"None",
   "investment_type":"equity",
   "is_invalid":"None",
   "management_expense_ratio":"None",
   "manually_entered_security":"None",
   "object":"security",
   "price_interface_symbol":"None",
   "quote_expiry_minutes":30,
   "security_entity":"None",
   "settlement_period_business_days":2,
   "skip_sync":False,
   "updated_by":"sysadmin",
   "updated_reason":"None",
   "ws_tradability_overwrite":"None",
   "id":"sec-s-76a7155242e8477880cbb43269235cb6",
   "fundamentals":{
      "description":"Apple Company Description",
      "low_52_week":201,
      "high_52_week":464.17,
      "market_cap":1965207.8169,
      "beta":1.1511,
      "pe_ratio":34.93,
      "eps":13.1572,
      "avg_volume":34323349.5,
      "yield":0.0069,
      "currency":"USD",
      "company_cash":27295,
      "company_revenue":273420,
      "company_ceo":"Tim Cook, MBA",
      "company_debt":122186,
      "total_assets":317344,
      "company_hq_location":"US",
      "company_earnings_growth":12.2316,
      "inception_year":1976,
      "company_gross_profit_margin":38.2123,
      "number_of_employees":137000,
      "ex_div_date":"2020-05-08T00:00:00",
      "industry_name":"Telecommunications Equipment",
      "website":"http://www.apple.com",
      "object":"fundamentals",
      "id":"sec-s-76a7155242e8477880cbb43269235cb6"
   },
   "quote":{
      "object":"spot_quote",
      "security_id":"sec-s-76a7155242e8477880cbb43269235cb6",
      "amount":"459.6300",
      "currency":"USD",
      "ask":"459.8000",
      "ask_size":1800,
      "bid":"459.6800",
      "bid_size":100,
      "high":"460.0000",
      "last_size":978153,
      "low":"452.1800",
      "open":"459.3150",
      "volume":41391302,
      "previous_close":"460.0400",
      "previous_closed_at":"2020-08-13T20:00:00.000Z",
      "quote_date":"2020-08-17T00:50:44.512Z"
   }
}
```

### Get Positions

#### Request

```
GET https://trade-service.wealthsimple.com/account/positions
```

#### Response

```
{
    "results": [
        {
            "currency": "USD",
            "security_type": "equity",
            "ws_trade_eligible": true,
            "cds_eligible": true,
            "active_date": "1999-01-22",
            "inactive_date": null,
            "active": true,
            "buyable": true,
            "sellable": true,
            "groups": [
                {
                    "id": "security-group-3dd224bd2e62",
                    "name_en": "Manufacturing"
                },
                {
                    "id": "security-group-56c3bcb832e2",
                    "name_en": "Electronics"
                },
                {
                    "id": "security-group-68432b3cd216",
                    "name_en": "Semiconductors"
                },
                {
                    "id": "security-group-c02ac2385470",
                    "name_en": "Software"
                },
                {
                    "id": "security-group-ca56bd46a479",
                    "name_en": "Engineering"
                },
                {
                    "id": "security-group-cb7e98a45f68",
                    "name_en": "Internet"
                },
                {
                    "id": "security-group-f68970b1232b",
                    "name_en": "Technology"
                }
            ],
            "stock": {
                "country_of_issue": "US",
                "symbol": "NVDA",
                "name": "NVIDIA Corp",
                "description": null,
                "primary_exchange": "NASDAQ",
                "secondary_exchanges": []
            },
            "object": "position",
            "id": "sec-s-220e8c65080c441aa87da8089460fae4",
            "quote": {
                "object": "spot_quote",
                "security_id": "sec-s-220e8c65080c441aa87da8089460fae4",
                "amount": "273.2800",
                "currency": "USD",
                "ask": "273.2800",
                "ask_size": 2900,
                "bid": "273.1900",
                "bid_size": 3300,
                "high": "281.8723",
                "last_size": 844928,
                "low": "268.0000",
                "open": "270.1900",
                "volume": 21422873,
                "previous_close": "294.0700",
                "quote_date": "2020-02-25T02:48:20.417Z"
            },
            "sparkline": [
                {
                    "date": "2020-02-21",
                    "time": "16:00:00",
                    "open": "294.0700",
                    "high": "294.0700",
                    "low": "294.0700",
                    "close": "294.0700",
                    "adj_close": "294.0700",
                    "volume": 0,
                    "currency": "USD",
                    "security_id": "sec-s-220e8c65080c441aa87da8089460fae4",
                    "data_source": "xignite-spot-hws"
                },
                ...
            ],
            "start_of_day_quantity": 0,
            "start_of_day_book_value": {
                "amount": 0,
                "currency": "CAD"
            },
            "start_of_day_market_book_value": {
                "amount": 0,
                "currency": "USD"
            },
            "external_security_id": "sec-s-220e8c65080c441aa87da8089460fae4",
            "quantity": 3,
            "sellable_quantity": 3,
            "created_at": "2020-02-02T17:21:24.349Z",
            "updated_at": "2020-02-02T17:21:24.349Z",
            "book_value_currency": "CAD",
            "start_of_day_book_value_currency": "CAD",
            "start_of_day_market_book_value_currency": "USD",
            "book_value": {
                "amount": 829.7793,
                "currency": "USD"
            },
            "market_book_value": {
                "amount": 829.266,
                "currency": "CAD"
            },
            "todays_earnings_baseline_value": {
                "amount": 829.266,
                "currency": "USD"
            },
            "account_id": "00000"
        },
        ...
    ]
}
```

### Get Activities

#### Request

```
GET https://trade-service.wealthsimple.com/account/activities
```

#### Response

```
{
    "results": [
        {
            "object": "withdrawal",
            "id": "funds_transfer-xxxx",
            "bank_account_id": "bank_account-xxxxx",
            "created_at": "2019-01-01T01:01:01.671Z",
            "updated_at": "2019-01-01T01:01:01.671Z",
            "rejected_at": null,
            "cancelled_at": null,
            "accepted_at": "2019-01-01T01:01:01.671Z",
            "status": "accepted",
            "value": {
                "amount": 100.00,
                "currency": "CAD"
            },
            "cancellable": false,
            "account_id": "non-registered-xxxx"
        },
        {
            "object": "order",
            "created_at": "2019-01-01T01:01:01.671Z",
            "updated_at": "2019-01-01T01:01:01.671Z",
            "filled_at": "2019-01-01T01:01:01.671Z",
            "perceived_filled_at": null,
            "completed_at": "2019-01-01T01:01:01.671Z",
            "order_type": "sell_quantity",
            "order_sub_type": "market",
            "status": "posted",
            "quantity": 100,
            "fill_quantity": 100,
            "symbol": "AAPL",
            "security_name": "Apple Inc",
            "time_in_force": "day",
            "limit_price": null,
            "account_value": {
                "amount": 100,
                "currency": "CAD"
            },
            "market_value": {
                "amount": 100,
                "currency": "CAD"
            },
            "account_hold_value": null,
            "fill_fx_rate": null,
            "settled": true,
            "order_id": "order-xxxx",
            "security_id": "sec-s-xxxxx",
            "account_id": "non-registered-xxxxx"
        }
    ]
}
```

### Get Me

Gets the user object

#### Request

```
GET https://trade-service.wealthsimple.com/me
```

#### Response

```
{
    "object": "user",
    "created_at": "2019-01-01T01:01:01.671Z",
    "updated_at": "2019-01-01T01:01:01.671Z",
    "canonical_id": "user-xxxxxx",
    "external_ws_user_id": "user-xxxxx",
    "external_hw_user_id": "user-xxxxx",
    "external_hw_person_id": "person-xxxxx",
    "attempted_existing_bank_account_import": true,
    "attempted_existing_document_import": true,
    "email_subscription_token": "xxxxxxxxxxxxxxx",
    "email": "fred@gmail.com",
    "first_name": "Fred",
    "last_name": "Flintstone",
    "feature_flags": [
        "tfsa"
    ],
    "id": "user-xxxxx",
    "external_hw_esignature_id": "document-xxxxx",
    "account_signatures": [
        {
            "external_account_id": "non-registered-xxxxx",
            "custodian_account_number": "H000000001CAD",
            "external_esignature_id": "document-xxxxxx",
            "opened_at": "2019-01-01",
            "deleted_at": null
        }
    ],
    "email_confirmed": true
}
```

### Get Person

Detailed information about the account holder

#### Request

```
GET https://trade-service.wealthsimple.com/person
```

#### Response

```
{
    "id": "person-xxxxx",
    "user_id": "user-u-xxxxx",
    "object": "person",
    "email": "fred@gmail.com",
    "preferred_first_name": null,
    "gender": "male",
    "date_of_birth": "1960-09-30",
    "country_of_birth": null,
    "locale": "en-CA",
    "external_id": null,
    "jurisdictions": [
        "CA"
    ],
    "citizenships": [
        "CA"
    ],
    "tax_residencies": null,
    "marital_status": null,
    "permanent_resident": false,
    "us_person": false,
    "full_legal_name": {
        "first_name": "Fred",
        "middle_names": null,
        "last_name": "Flintstone"
    },
    "residential_address": {
        "unit": null,
        "street_number": "345",
        "street_name": "Cave Stone Road",
        "city": "Bedrock",
        "province_state_region": "BC",
        "postal_code": "A1A1A1",
        "country": "CA"
    },
    "mailing_address": {
        "unit": null,
        "street_number": "345",
        "street_name": "Cave Stone Road",
        "city": "Bedrock",
        "province_state_region": "BC",
        "postal_code": "A1A1A1",
        "country": "CA"
    },,
    "employment": {
        "status": "employed",
        "employer_info": {
            "employer_name": "Slate Rock and Gravel Company",
            "employer_industry": "Mining",
            "position": "Bronto Crane Operator"
        }
    },
    "phone_numbers": [
        {
            "primary": true,
            "country_code": "1",
            "number": "5555551234",
            "type": "mobile"
        }
    ],
    "insiders": [],
    "tax_identification_numbers": [
        {
            "type": "ca_sin_itn",
            "number": "111111111"
        }
    ],
    "regulated_people": [],
    "politically_exposed_people": [],
    "dependents": [],
    "created_at": "2019-01-01T01:01:01.671Z",
    "updated_at": "2019-01-01T01:01:01.671Z"
}
```

### Get Bank accounts

#### Request

```
GET https://trade-service.wealthsimple.com/bank-accounts
```

#### Response

```
{
    "object": "bank_account",
    "offset": 0,
    "total_count": 1,
    "results": [
        {
            "object": "bank_account",
            "id": "bank_account-xxxxx",
            "type": "chequing",
            "corporate": false,
            "account_name": null,
            "institution_number": "000",
            "transit_number": "***11",
            "account_number": "****111",
            "jurisdiction": "CA",
            "owners": [
                "person-xxxx"
            ],
            "created_at": "2019-01-01T01:01:01.671Z",
            "updated_at": "2019-01-01T01:01:01.671Z",
            "verifications": [
                {
                    "id": "verification-xxxx",
                    "method": "plaid",
                    "status": "accepted",
                    "document_id": "document-xxxx",
                    "processed_at": "2019-01-01T01:01:01.671Z"
                }
            ]
        }
    ]
}
```

### Get Deposits

#### Request

```
GET https://trade-service.wealthsimple.com/deposits
```

#### Response

```
{
    "object": "deposit",
    "results": [
        {
            "object": "deposit",
            "id": "funds_transfer-xxxx",
            "bank_account_id": "bank_account-xxxx",
            "created_at": "2019-01-01T01:01:01.671Z",
            "updated_at": "v",
            "rejected_at": null,
            "cancelled_at": null,
            "accepted_at": "2019-01-01T01:01:01.671Z",
            "status": "accepted",
            "value": {
                "amount": 100,
                "currency": "CAD"
            },
            "cancellable": false,
            "account_id": "non-registered-xxxx"
        }
    ]
}
```

### Get Foreign Exchange Rate

#### Request

```
GET https://trade-service.wealthsimple.com/forex
```

#### Response

```
{
    "USD": {
        "buy_rate": 1.3651,
        "sell_rate": 1.3245,
        "spread": 0.015,
        "fx_rate": 1.3447
    }
}
```
