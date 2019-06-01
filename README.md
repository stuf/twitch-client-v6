
# `@stuf/twitch-client-v6`

Observable-based Twitch API client.

## Contents

  - [Reference](#reference)
    - [API calls](#reference-api)
      - [`API.videos(id, client) ~> AxiosInstance`](#reference-api.videos)
    - [Specific](#reference-specific)
      - [`videosFor(ids, client) ~> [Video]`](#reference-videosFor)
      - [`videoFor(id, client) ~> Video`](#reference-videoFor)


## <a name="reference"></a>Reference

### <a name="reference-api"></a>API calls

Raw API calls that are used to perform more specialized queries. Instead of using the API calls, one should use the specialized versions instead, as they come with the added ability to normalize data to the specific use-case.

#### <a name="reference-api.videos"></a> `API.videos(id, client) ~> AxiosInstance`

### <a name="reference-specific"></a>Specific

#### <a name="reference-videosFor"></a> `videosFor(ids, client) ~> [Video]`

Returns an Observable containing videos matching the given criteria.

#### <a name="videoFor"></a> `videoFor(id, client) ~> Video`

Returns an Observable containing the first video matching the given criteria.
