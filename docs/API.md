# Wealthsimple Trade API

### Login
#### Request
```
POST https://trade-service.wealthsimple.com/auth/login
{

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
````
POST https://trade-service.wealthsimple.com/auth/refresh
{
    ???
}
````

#### Response
```
    ???
```


### Account
#### Request
````
GET https://trade-service.wealthsimple.com/account
````

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
DELETE https://trade-service.wealthsimple.com/order-xxxxxx
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


### Get Positions

#### Request
```
GET https://trade-service.wealthsimple.com/account/positions
```

#### Response
```
{
    "results": [
        ???
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
    "email_confirmed": truw
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
GET https://trade-service.wealthsimple.com/bank-accounts
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
