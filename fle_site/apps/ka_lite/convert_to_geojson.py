import json 

def make_geojson_dict(lat, lon, **properties):
  return {
  "type": "Feature",
  "properties": properties,
  "geometry": {
    "coordinates": [lon, lat],
    "type": "Point"
  }}

def convert_installs_file():
  data = json.load(open('/Users/arvind/Downloads/locations.json'))
  json.dump(dict(features=[make_geojson_dict(x['latitude'], x['longitude'], type="ka_lite_install") for x in data], type="FeatureCollection"), open('/Users/arvind/Downloads/geo_locations.json', 'w'))