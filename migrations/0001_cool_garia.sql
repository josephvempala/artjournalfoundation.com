CREATE TABLE `registrations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`competition` text NOT NULL,
	`student_name` text NOT NULL,
	`school_name` text NOT NULL,
	`email` text NOT NULL,
	`contact` text NOT NULL,
	`grade` text NOT NULL,
	`category` text NOT NULL,
	`place` text NOT NULL,
	`instagram_handle` text,
	`payment_method` text NOT NULL,
	`amount` integer NOT NULL,
	`currency` text NOT NULL,
	`razorpay_order_id` text,
	`razorpay_payment_id` text,
	`payment_status` text DEFAULT 'pending' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `registrations_competition_idx` ON `registrations` (`competition`);--> statement-breakpoint
CREATE INDEX `registrations_email_idx` ON `registrations` (`email`);--> statement-breakpoint
CREATE INDEX `registrations_razorpay_order_id_idx` ON `registrations` (`razorpay_order_id`);