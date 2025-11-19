CREATE TABLE `form_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`form_name` text NOT NULL,
	`data` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `form_name_idx` ON `form_submissions` (`form_name`);--> statement-breakpoint
CREATE INDEX `created_at_idx` ON `form_submissions` (`created_at`);