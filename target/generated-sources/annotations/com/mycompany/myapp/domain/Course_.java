package com.mycompany.myapp.domain;

import com.mycompany.myapp.domain.enumeration.CourseState;
import java.time.Instant;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Course.class)
public abstract class Course_ {

	public static volatile SingularAttribute<Course, Basket> basket;
	public static volatile SingularAttribute<Course, Instant> deliveryTime;
	public static volatile SingularAttribute<Course, Restaurant> restaurant;
	public static volatile SingularAttribute<Course, Long> id;
	public static volatile SingularAttribute<Course, CourseState> state;

	public static final String BASKET = "basket";
	public static final String DELIVERY_TIME = "deliveryTime";
	public static final String RESTAURANT = "restaurant";
	public static final String ID = "id";
	public static final String STATE = "state";

}

