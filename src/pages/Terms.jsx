import { motion } from "framer-motion";
import styles from "./terms.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Terms = () => {
  return (
    <div className="flex justify-center py-5">
      <motion.div
        className={`${styles.termsContainer} border w-[90vw] p-5`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-3xl font-bold mb-4" variants={itemVariants}>
          Terms and Conditions
        </motion.h1>

        <motion.h5 variants={itemVariants}>BIRYAAN SERVICE USE :</motion.h5>
        <motion.p variants={itemVariants}>
          1. User is hereby allowed to use the Biryaan Service subject to
          acceptance of the terms and conditions and the Privacy Policy on the
          Biryaan Website (“Terms”). Biryaan retains the right to change the
          Terms from time to time and such modified Terms shall be immediately
          applicable. Every time you use the Biryaan Service, shall constitute
          your acceptance of changes made to Terms. For detailed terms, please
          refer our website www.biryaan.in
        </motion.p>

        <motion.h5 variants={itemVariants}>ORDERING :</motion.h5>
        <motion.p variants={itemVariants}>
          1. You agree to take reasonable care when providing Biryaan with your
          details and warrant that these details are accurate and complete at
          the time of ordering food. You also warrant that the credit or debit
          card details that you provide are of your own credit or debit card.
        </motion.p>
        <motion.p variants={itemVariants}>
          2. Biryaan ensures quality standards and is responsible and liable for
          all and any issues and cases pertaining to the quality of the food or
          order for eg. veg/non-veg labelling etc but not limited to this, to
          the User directly.
        </motion.p>
        <motion.p variants={itemVariants}>
          3. User understands that some type of Food may be suitable for Users
          within certain age ranges only. It is your sole responsibility to
          check whether the Food you are ordering is suitable for the intended
          recipient.
        </motion.p>

        <motion.h5 variants={itemVariants}>PRICES AND PAYMENT :</motion.h5>
        <motion.p variants={itemVariants}>
          1. All prices listed on the Biryaan Website for Food is correct at the
          time of publication and is as received from the Participating
          Restaurant. While Biryaan takes great care to keep them up to date,
          the final price charged to you may change at the time of delivery
          ,based on the latest menu and prices. Biryaan reserves the right to
          alter the menu of Food available for sale and to delete and remove
          from listing the menu of Food and Food Delivery options, if any.
        </motion.p>
        <motion.p variants={itemVariants}>
          2. User agrees that in case of change in price, Biryaan or its
          employees will not be liable to him in any manner.
        </motion.p>
        <motion.p variants={itemVariants}>
          3. The total price for Food and Food Delivery including all other
          charges, taxes, costs, if any, will be displayed on the Biryaan
          Website /or our Delivery Partners App/Website when you place your
          order. Full payment must be made for all the particulars mentioned in
          the order.
        </motion.p>
        <motion.p variants={itemVariants}>
          4. If you choose online payment, you shall ensure that online payment
          mode is secured, your debit/credit card details will be encrypted to
          prevent the possibility of someone being able to read them as they are
          sent over the internet. Your credit card company may also conduct
          necessary security checks to confirm about your identification before
          making any such payment.
        </motion.p>
        <motion.p variants={itemVariants}>
          5. Biryaan Biryani is powered by Biryaan Foods Private Limited.
        </motion.p>

        <motion.h5 variants={itemVariants}>DELIVERY :</motion.h5>
        <motion.p variants={itemVariants}>
          1. Delivery period quoted at the time of ordering are approximate only
          and may vary or according to our official delivery partners. Food will
          be delivered to the address as intimated by you while ordering.
        </motion.p>
        <motion.p variants={itemVariants}>
          2. Biryaan will make every effort to deliver within the time stated;
          however, Biryaan will not be liable for any loss caused to you by late
          delivery. If the Food is not delivered within the estimated delivery
          time quoted, User may contact Biryaan or our delivery partner by email
          and we will try to ensure that you receive your order as quickly as
          reasonably possible.
        </motion.p>
        <motion.p variants={itemVariants}>
          3. In case of a late delivery, the delivery charge will neither be
          voided nor refunded by Biryaan.
        </motion.p>
        <motion.p variants={itemVariants}>
          4. If you fail to accept delivery of Food at the time they are ready
          for delivery or Biryaan is unable to deliver at the nominated time due
          to your failure to provide appropriate instructions or authorizations,
          then the Food shall be deemed to have been delivered to you and all
          risk and responsibility in relation to such Food shall pass to you.
          Any storage, insurance and other costs which Biryaan incur as a result
          of the inability to deliver shall be your responsibility and you shall
          indemnify Biryaan in full for such cost.
        </motion.p>
        <motion.p variants={itemVariants}>
          5. You must ensure that at the time of delivery of Food adequate
          arrangements, including access where necessary, are in place for the
          safe delivery of the Food. Biryaan cannot be held liable for any
          damage, cost or expense incurred to such Food as a result of a fail.
        </motion.p>
        <motion.p variants={itemVariants}>
          6. Our official delivery partner is only Zomato.
        </motion.p>

        <motion.h5 variants={itemVariants}>REFUND POLICY :</motion.h5>
        <motion.p variants={itemVariants}>
          1. A refund request usually takes 7-10 business days to reflect in
          customer’s account depending on the bank/wallet used for payment.
        </motion.p>

        <motion.h5 variants={itemVariants}>
          PERSONAL INFORMATION AND PRIVACY :
        </motion.h5>
        <motion.p variants={itemVariants}>
          1. User understands and acknowledges that by choosing Biryaan you have
          allowed Biryaan to use your personal information.
        </motion.p>
        <motion.p variants={itemVariants}>
          2. User understands, acknowledges and agrees that although Biryaan
          provides appropriate firewalls and protections, the Biryaan Service is
          not hack proof. Data pilferage due to unauthorized hacking, virus
          attacks, technical issues is possible.
        </motion.p>
        <motion.p variants={itemVariants}>
          3. In case Biryaan is required to disclose your personal information
          in order to assist the Government Authority or in adherence to the
          Court Order or to protect the interest of the Biryaan Service and/or
          any particular user(s), Biryaan will disclose it without obtaining
          prior permission from you. You authorize us to disclose your personal
          information.
        </motion.p>
        <motion.p variants={itemVariants}>
          4. Your use of this site means that we have your consent to send
          periodic communication regarding offers, alerts and updates. This
          communication can be through SMS, emails or any other communication
          tool.
        </motion.p>

        <motion.h5 variants={itemVariants}>CONTACT :</motion.h5>
        <motion.p variants={itemVariants}>
          1. For any questions or comments (including all inquiries unrelated to
          copyright infringement) regarding this Platform, please contact us on
          the details below:
        </motion.p>
        <motion.p variants={itemVariants}>2. Email: info@biryaan.in</motion.p>

        <motion.h5 variants={itemVariants}>
          OWNERSHIP OF INTELLECTUAL PROPERTY :
        </motion.h5>
        <motion.p variants={itemVariants}>
          1. Biryaan is owned and operated by Biryaan Foods Private Limited a
          company, a private limited company incorporated in India under the
          provisions of the Companies Act, 1956 and having its registered office
          at Office No. 138 VHB Colony, Balabhau peth, Near Chinnappa Akhada,
          Nagpur - 440017, Maharashtra, India (Biryaan Foods). All intellectual
          property rights of the Biryaan, including but not limited to
          copyright, logos, names, trademarks, service marks, design, text,
          sound recordings, images, links, concepts and themes are exclusively
          owned by Rebel Foods.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Terms;
