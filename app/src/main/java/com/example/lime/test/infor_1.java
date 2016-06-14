package com.example.lime.test;

import android.app.Activity;
import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapFragment;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

/**
 * Created by lime on 2016-06-06.
 */
public class infor_1 extends Activity{
    private GoogleMap mMap;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.infor_2_map);

        mMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
        LatLng seoul = new LatLng(37.314956, 126.952562);
        mMap.moveCamera(CameraUpdateFactory.zoomTo(17));
        mMap.setMapType(GoogleMap.MAP_TYPE_NORMAL);

        mMap.addMarker( new MarkerOptions().position(seoul).title( "한국교통대학병원" ));
        mMap.moveCamera( CameraUpdateFactory.newLatLng(seoul));

    }


}
