package com.example.lime.test;

import android.app.Activity;
import android.app.ActivityGroup;
import android.content.Context;
import android.content.Intent;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;

import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;



import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;

import java.util.ArrayList;

/**
 * Created by lime on 2016-05-23.
 */
public class Tab_information extends Activity {

    private GoogleMap map;
    private SensorManager mSensorManager;
    private boolean mCompassEnabled;

    public static Tab_information informationHGroup;
    private ArrayList<View> history;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.infor_1_layout);

        final ImageView mapb = (ImageView) findViewById(R.id.mapb);

        mapb.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                    Intent intent = new Intent(Tab_information.this, infor_1.class);
                    startActivity(intent);
            }
        });

    }


    //새로운 Level의 Activity를 추가하는 경우,
    public void replaceView(View view) {
        history.add(view);
        setContentView(view);
    }

    // Back Key가 눌러졌을 경우에 대한 처리
    public void back() {
        if(history.size() > 0) {
            history.remove(history.size()-1);
            if(history.size() ==  0)
                finish();
            else
                setContentView(history.get(history.size()-1));
        }
        else
        {
            finish();
        }
    }

    // Back Key에 대한 Event Handler
    @Override
    public void onBackPressed() {
        informationHGroup.back();
        return ;
    }
}



