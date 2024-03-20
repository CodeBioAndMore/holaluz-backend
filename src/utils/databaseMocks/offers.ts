import { PromotionsEnum } from "../enums/promotion.enum";

export const offers = [{
    id: 1,
    promotion_id: PromotionsEnum.RooftopPromotion,
    offerName: "Standard offer",
    discount: 0,
    conditions: null,
    offer_conditions_info: "No conditions."
  },
  {
    id: 2,
    promotion_id: PromotionsEnum.RooftopPromotion,
    offerName: "Basic discount",
    discount: 0.05,
    conditions: "",
    offer_conditions_info: "Clients neighbors should have `p1` and `p2` powers lower than the current client's supply point."
  }
]