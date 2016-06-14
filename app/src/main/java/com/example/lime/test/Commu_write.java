package com.example.lime.test;

import android.app.Activity;
import android.os.Bundle;

/**
 * Created by lime on 2016-05-23.
 */
public class Commu_write extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.commu_write_layout);
    }
    @Override
    public void onBackPressed() {
        Tab_community parent = ((Tab_community)getParent());
        parent.onBackPressed();
    }
}
