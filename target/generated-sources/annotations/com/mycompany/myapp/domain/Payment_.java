package com.mycompany.myapp.domain;

import com.mycompany.myapp.domain.enumeration.PaymentMethod;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Payment.class)
public abstract class Payment_ {

	public static volatile SingularAttribute<Payment, PaymentMethod> paymentMethod;
	public static volatile SingularAttribute<Payment, Long> id;

	public static final String PAYMENT_METHOD = "paymentMethod";
	public static final String ID = "id";

}

