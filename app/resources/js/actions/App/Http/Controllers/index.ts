import LandingController from './LandingController'
import DonationController from './DonationController'
import RazorpayWebhookController from './RazorpayWebhookController'
const Controllers = {
    LandingController: Object.assign(LandingController, LandingController),
DonationController: Object.assign(DonationController, DonationController),
RazorpayWebhookController: Object.assign(RazorpayWebhookController, RazorpayWebhookController),
}

export default Controllers