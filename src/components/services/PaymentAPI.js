

export function callPaymentAPI(payload) {

    return fetch(
        `https://npeprocessnew-env.eba-3mdivn3b.us-east-1.elasticbeanstalk.com/payment`,
        {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    ).then((data) => data.json());
}