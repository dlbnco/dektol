import stripe from 'stripe'

const Stripe = new stripe(process.env.STRIPE_SECRET_KEY!)

export const getStripePaymentLink = async (
  price: string,
  options?: stripe.PaymentLinkCreateParams,
) =>
  await Stripe.paymentLinks.create({
    after_completion: {
      hosted_confirmation: {
        custom_message:
          "Thank you! I'll print your order and ship it. Expect to hear back from me with the shipping information.",
      },
      type: 'hosted_confirmation',
    },
    shipping_options: [
      {
        shipping_rate: 'shr_1QfcX6JlIMjGoI3nKg8FKPpH',
      },
    ],
    shipping_address_collection: {
      allowed_countries: [
        'AX',
        'AL',
        'AD',
        'AT',
        'BY',
        'BE',
        'BA',
        'BG',
        'HR',
        'CZ',
        'DK',
        'EE',
        'FO',
        'FI',
        'FR',
        'DE',
        'GI',
        'GR',
        'GG',
        'HU',
        'IS',
        'IE',
        'IM',
        'IT',
        'JE',
        'XK',
        'LV',
        'LI',
        'LT',
        'LU',
        'MT',
        'MD',
        'MC',
        'ME',
        'NL',
        'MK',
        'NO',
        'PL',
        'PT',
        'RO',
        'RU',
        'SM',
        'RS',
        'SK',
        'SI',
        'ES',
        'SJ',
        'SE',
        'CH',
        'UA',
        'GB',
        'VA',
        'CA',
        'MX',
        'US',
      ],
    },
    ...options,
    line_items: [
      {
        price: price,
        quantity: 1,
      },
    ],
  })

export default Stripe
