export const TRANSITION_DURATION_IN_SECONDS = 0.5;

export const DELAY_BEFORE_BEGINNING_IN_SECONDS = 1;
export const DELAY_BEFORE_MAP_APPEARS = 1;
export const DELAY_BEFORE_FORECAST_IN_SECONDS = 1;
export const FORECAST_DURATION_IN_SECONDS = 5;
export const MORNING_TEMPERATURE_DURATION_IN_SECONDS = 5;
export const AFTERNOON_TEMPERATURE_DURATION_IN_SECONDS = 5;
export const FINAL_FADE_OUT_ANIMATION_DURATION_IN_SECONDS = TRANSITION_DURATION_IN_SECONDS;

export const TOTAL_DURATION =
    DELAY_BEFORE_BEGINNING_IN_SECONDS +
    DELAY_BEFORE_MAP_APPEARS +
    DELAY_BEFORE_FORECAST_IN_SECONDS +
    FORECAST_DURATION_IN_SECONDS +
    MORNING_TEMPERATURE_DURATION_IN_SECONDS +
    AFTERNOON_TEMPERATURE_DURATION_IN_SECONDS +
    FINAL_FADE_OUT_ANIMATION_DURATION_IN_SECONDS;
