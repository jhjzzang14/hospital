package com.example.lime.test;

import android.app.TabActivity;
import android.content.Intent;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TabHost;


/**
 * Created by lime on 2016-04-16.
 */
public class Login extends TabActivity {
    /** Called when the activity is first created. */
    public TabHost tabHost = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.log_in);

        tabHost = (TabHost) findViewById(android.R.id.tabhost);

        tabHost.addTab(tabHost.newTabSpec("tab1")
                .setIndicator("정보")
                .setContent(new Intent(this, Tab_information.class)));

        tabHost.addTab(tabHost.newTabSpec("tab2")
                .setIndicator("예약")
                .setContent(new Intent(this, Tab_treatcheck.class)));

        tabHost.addTab(tabHost.newTabSpec("tab3")
                .setIndicator("확인")
                .setContent(new Intent(this, Tab_prescription.class)));

        tabHost.addTab(tabHost.newTabSpec("tab4")
                .setIndicator("게시판")
                .setContent(new Intent(this, Tab_community.class)));

        tabHost.addTab(tabHost.newTabSpec("tab5")
                .setIndicator("캠페인")
                .setContent(new Intent(this, Tab_campaign.class)));

        tabHost.setCurrentTab(0);



    }

}
