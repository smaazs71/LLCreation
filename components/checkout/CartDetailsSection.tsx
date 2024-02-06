import { useGlobal } from "@/context/GlobalState";

const CartDetailsSection = () => {
  const {
    user: { cart },
    getCartTotalAmount,
  } = useGlobal();

  return (
    <>
      <div className="flex flex-col pb-2 border-b border-border-200">
        <div className="flex justify-between py-2">
          <div className="flex items-center justify-between text-base">
            <span className="text-sm text-body">
              <span className="text-sm font-bold text-heading">5</span>
              <span className="mx-2">x</span>
              <span>Apples</span> | <span>1lb</span> <span> </span>
            </span>
          </div>
          <span className="text-sm text-body">$8.00</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <p className="text-sm text-body">Sub Total</p>
          <span className="text-sm text-body">$8.00</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-body">Tax</p>
          <span className="text-sm text-body">$0.00</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-body">
            Shipping <span className="text-xs font-semibold text-accent"></span>
          </p>
          <span className="text-sm text-body"> $0.00</span>
        </div>
        <div className="mt-5 !mb-4 flex justify-between">
          <p
            role="button"
            className="text-xs font-bold transition duration-200 text-body hover:text-accent"
          >
            Do you have coupon?
          </p>
        </div>
        <div className="flex justify-between pt-3 border-t-4 border-double border-border-200">
          <p className="text-base font-semibold text-heading">Total</p>
          <span className="text-base font-semibold text-heading">$8.00</span>
        </div>
      </div>
      <div>
        <div className="mt-2 space-y-2">
          <div className="flex justify-between text-sm text-body">
            <span>
              Wallet <span className="lowercase">Points</span>
            </span>
            <span>0</span>
          </div>
          <div className="flex justify-between text-sm text-body">
            <span>Wallet currency</span>
            <span>$0.00</span>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center">
            <input
              id="use_wallet"
              name="use_wallet"
              type="checkbox"
              className="checkbox"
              //   disabled=""
            />
            <label className="text-body text-sm primary">
              Do you want to use wallet?
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetailsSection;
