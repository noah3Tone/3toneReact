<?php

add_action( 'graphql_register_types', function() {
	register_graphql_mutation(
		'loginWithCookies',
		array(
			'inputFields' => array(
				'login'      => array(
					'type'        => array( 'non_null' => 'String' ),
					'description' => __( 'Input your username/email.' ),
				),
				'password'   => array(
					'type'        => array( 'non_null' => 'String' ),
					'description' => __( 'Input your password.' ),
				),
			),
			'outputFields'        => array(
				'status' => array(
					'type'        => 'String',
					'description' => 'Login operation status',
					'resolve'     => function( $payload ) {
						return $payload['status'];
					},
				),
			),
			'mutateAndGetPayload' => function( $input ) {
				$user = wp_signon( 
					array(
						'user_login'    => wp_unslash( $input['login'] ),
						'user_password' => $input['password'],
					), 
					true 
				);

				if ( is_wp_error( $user ) ) {
					throw new \GraphQL\Error\UserError\UserError( ! empty( $user->get_error_code() ) ? $user->get_error_code() : 'invalid login' );
				}

				return array( 'status' => 'SUCCESS' );
			},
		)
	);
} );